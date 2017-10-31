/**
 * @file get MIP data
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const getHTML = require('./getHTML');

module.exports = () => getHTML().filter(val => /<html\s+(.*?)mip>/.test(val.html));
