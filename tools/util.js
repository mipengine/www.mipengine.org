/**
 * @file 一些工具方法
 * @author xuexb <fe.xiaowu@gmail.com
 * @link https://github.com/mipengine/mip-extension-optimizer/blob/master/lib/util.js
 */

'use strict';

const yaml = require('yamljs');
const fs = require('fs');
const path = require('path');
const unzip = require('unzip');
const got = require('got');

/**
 * 判断文件是否存在
 *
 * @inner
 * @param {string} file 文件路径
 * @return {boolean}
 */
exports.fileExists = file => {
    try {
        return fs.statSync(file).isFile();
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }

        return false;
    }
};

/**
 * 判断文件是否目录
 *
 * @inner
 * @param {string} file 文件路径
 * @return {boolean}
 */
exports.isDirectory = file => {
    try {
        return fs.statSync(file).isDirectory();
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }

        return false;
    }
};

/**
 * 读取组件的 preset
 *
 * @param  {string} dir 组件目录
 *
 * @return {string}
 */
exports.readPreset = dir => {
    const file = path.resolve(dir, 'setting/example.preset');

    if (!exports.fileExists(file)) {
        return '';
    }

    return fs.readFileSync(file).toString();
};

/**
 * 下载github中的zip包
 *
 * @param  {Object} data 数据
 * @param {string} data.git zip地址
 * @param {string} data.file 产出本地文件路径
 *
 * @return {Promise}
 */
exports.downGit = data => {
    return new Promise((resolve, reject) => {
        const down = got.stream(data.git);

        down.on('end', () => resolve(data));

        down.on('error', reject);

        down.pipe(fs.createWriteStream(data.file));
    });
};

/**
 * 解压zip包到当前zip包路径
 *
 * @param  {Object} data 数据
 * @param {string} data.file zip文件地址
 *
 * @return {Promise}
 */
exports.unzipFile = data => {
    return new Promise((resolve, reject) => {
        /* eslint-disable babel/new-cap */
        const extract = unzip.Extract({
            path: path.dirname(data.file)
        });
        /* eslint-enable babel/new-cap */

        extract.on('finish', () => {
            // 不延迟居然报错
            setTimeout(() => {
                resolve(data);
            }, 500);
        });

        extract.on('error', reject);

        fs.createReadStream(data.file).pipe(extract);
    });
};

/**
 * 生成 markdown 文档
 *
 * @param  {Object} data    数据
 * @param {string} data.title 标题
 * @param {string} data.content 内容
 * @param {Object} data.setting 组件设置
 * @param {string} data.setting.preset 前插内容
 * @param {string} data.setting.name 组件名称
 * @param {Array} data.setting.deps 组件依赖
 * @param {boolean} data.setting.preview 是否可以预览
 *
 * @return {string}
 */
exports.toMarkdown = data => {
    const json = {
        title: data.title,
        layout: 'examples',
        description: false,
        keywords: false,
        setting: {
            name: data.setting.name,
            deps: data.setting.deps,
            preset: escape(data.setting.preset),
            preview: data.setting.preview
        }
    };
    const content = [
        yaml.stringify(json, 2),
        '---',
        '',
        data.content
    ];

    return content.join('\n');
};

/**
 * 解析组件 markdown
 *
 * @description
 *     1. 解析文档标题
 *     2. 解析组件所需的脚本
 *     3. 替换文档内空里的 https:?//www.mipengine.org/doc|examples 为绝对 /doc ，因为组件文档仓库和官网不是一个仓库
 * @param  {string} content 内容
 *
 * @return {Object}
 */
exports.parseMarkdown = content => {
    let data = content.split(/\n/);
    let title = (data[0].match(/\#\s*(.+?)$/) || ['', ''])[1];
    let deps = (content.match(/所需脚本\s*\|\s*(.+?)[\r\n]/) || ['', '无'])[1];

    data.shift();

    return {
        content: data.join('\n').replace(/(https?:)?\/\/www\.mipengine\.org\/(doc|examples)\//g, '/$2/'),
        title,
        deps: deps === '无' ? '' : deps.split(/\s*(?:,|<br\/?>)\s*/)
    };
};
