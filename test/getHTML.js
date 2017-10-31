/**
 * @file 获取生成的 HTML 数据
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const mipDir = path.resolve(__dirname, '../dist/');
const reporter = require('../tools/cli-reporter');
const util = require('../tools/util');

module.exports = () => {
    if (!util.isDirectory(mipDir)) {
        reporter.error(`${mipDir} 不存在`);
        process.exit(1);
    }

    return glob
        .sync('**/*.html', {
            cwd: mipDir
        })
        .map(uri => {
            return {
                uri,
                path: uri,
                html: fs.readFileSync(path.resolve(mipDir, uri)).toString()
            };
        });
};
