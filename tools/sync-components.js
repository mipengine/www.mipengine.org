/**
 * @file 同步组件文档
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const components = require('./components');
const reporter = require('./cli-reporter');
const util = require('./util');

/**
 * 基础路径
 *
 * @const
 * @type {string}
 */
const BASE_URL = path.resolve(__dirname, '..');

/**
 * 工具目录，用来做下载 zip 包临时目录
 *
 * @const
 * @type {string}
 */
const TOOLS_PATH = path.resolve(BASE_URL, 'tools');

/**
 * 处理核心组件文档
 *
 * @description 包括: 文档的 preset 抽取、标题兼容、文件复制到 source 内
 * @return {Promise}
 */
const coreProcessor = () => {
    return new Promise((resolve, reject) => {
        const masterPath = path.resolve(TOOLS_PATH, 'mip-master');

        if (!util.isDirectory(masterPath)) {
            return reject(`${masterPath} 不存在`);
        }

        const processor = components.getCore().map(val => {
            return new Promise((resolve, reject) => {
                const markdownFile = path.resolve(masterPath, val.readme);
                const outputFilePath = path.resolve(BASE_URL, 'source', val.output);

                if (!util.fileExists(markdownFile)) {
                    return reject(`${markdownFile} 不存在`);
                }

                const data = util.parseMarkdown(fs.readFileSync(markdownFile).toString());
                const preset = util.readPreset(path.dirname(markdownFile));

                mkdirp.sync(path.dirname(outputFilePath));

                fs.writeFileSync(outputFilePath, util.toMarkdown({
                    title: data.title,
                    content: data.content,
                    setting: {
                        deps: data.deps,
                        name: val.name,
                        preset,
                        preview: val.preview === undefined ? true : !!val.preview
                    }
                }));

                reporter.info(`${val.output} 同步成功`);

                resolve();
            });
        });

        Promise.all(processor).then(resolve).catch(reject);
    });
};

/**
 * 处理扩展组件文档
 *
 * @description 包括: 文档的 preset 抽取、标题兼容、文件复制到 source 内
 * @return {Promise}
 */
const extensionsProcessor = () => {
    return new Promise((resolve, reject) => {
        const extensionsDir = path.resolve(TOOLS_PATH, 'mip-extensions-master');

        if (!util.isDirectory(extensionsDir)) {
            return reject(`${extensionsDir} 不存在`);
        }

        const processor = components.getExtensions().map(val => {
            return new Promise((resolve, reject) => {
                const markdownFile = path.resolve(extensionsDir, val.readme);
                const outputFilePath = path.resolve(BASE_URL, 'source', val.output);

                if (!util.fileExists(markdownFile)) {
                    return reject(`${markdownFile} 不存在`);
                }

                const data = util.parseMarkdown(fs.readFileSync(markdownFile).toString());
                const preset = util.readPreset(path.dirname(markdownFile));

                mkdirp.sync(path.dirname(outputFilePath));

                fs.writeFileSync(outputFilePath, util.toMarkdown({
                    title: data.title,
                    content: data.content,
                    setting: {
                        deps: data.deps,
                        name: val.name,
                        preset,
                        preview: val.preview === undefined ? true : !!val.preview
                    }
                }));

                reporter.info(`${val.output} 同步成功`);

                resolve();
            });
        });

        Promise.all(processor).then(resolve).catch(reject);
    });
};

/**
 * 清除目录
 */
const clean = () => {
    [
        'mip-extensions-master.zip',
        'mip-extensions-master',
        'mip-master.zip',
        'mip-master'
    ].forEach(name => {
        rimraf.sync(path.resolve(TOOLS_PATH, name));
    });
};

let sync = [];

// 同步核心组件
sync.push(
    util.downGit({
        git: 'https://github.com/mipengine/mip/archive/master.zip',
        file: path.resolve(TOOLS_PATH, 'mip-master.zip')
    })
    .then(util.unzipFile)
    .then(coreProcessor)
);

// 同步扩展组件
sync.push(
    util.downGit({
        git: 'https://github.com/mipengine/mip-extensions/archive/master.zip',
        file: path.resolve(TOOLS_PATH, 'mip-extensions-master.zip')
    })
    .then(util.unzipFile)
    .then(extensionsProcessor)
);

reporter.info('开始同步组件文档!\n');

// 删除之前版本文档
rimraf.sync(path.resolve(BASE_URL, './source/examples'));

Promise.all(sync).then(clean).then(() => {
    reporter.info('\n同步成功!\n');
}).catch(err => {
    reporter.error(err);
    clean();
    process.exit(1);
});
