/**
 * @file 组件统一对外方法
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const MAP = require('./components.json');

/**
 * 是否为核心组件
 *
 * @param  {string}  name 组件名称
 * @return {boolean}
 */
exports.isCore = name => MAP.some(val => val.type === 'core' && val.name === name);

/**
 * 是否为扩展组件
 *
 * @param  {string}  name 组件名称
 * @return {boolean}
 */
exports.isExtensions = name => MAP.some(val => val.type === 'extensions' && val.name === name);

/**
 * 是否为官方组件
 *
 * @param  {string}  name 组件名称
 * @return {boolean}
 */
exports.isOfficial = name => MAP.some(val => val.name === name);

/**
 * 获取核心组件列表
 *
 * @param  {string}  name 组件名称
 * @return {Array}
 */
exports.getCore = name => MAP.filter(val => val.type === 'core');

/**
 * 获取扩展组件列表
 *
 * @param  {string}  name 组件名称
 * @return {Array}
 */
exports.getExtensions = name => MAP.filter(val => val.type === 'extensions');
