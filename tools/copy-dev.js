/**
 * @file 复制开发配置
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const path = require('path');
const fs = require('fs');
const yaml = require('yamljs');

/**
 * 开发配置文件
 *
 * @const
 * @type {string}
 */
const DEV_CONFIG_FILE = path.resolve(__dirname, '../_config.dev.yml');

/**
 * 生产环境配置文件
 *
 * @const
 * @type {string}
 */
const CONFIG_FILE = path.resolve(__dirname, '../_config.yml');

let config = yaml.parse(fs.readFileSync(CONFIG_FILE).toString());

config.html_minifier.exclude = '**/*';
config.mip = config.mip || {};
config.mip.cssmin = false;

// 删除老配置
fs.writeFileSync(DEV_CONFIG_FILE, yaml.stringify(config, 2));
