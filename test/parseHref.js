/**
 * @file 解析 <a> 标签中的 href
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const parse = require('url').parse;

module.exports = content => {
    return (content.match(/<a\s+(?:[\s\S]*?)href=['"](.+?)['"]/g) || [])
        .map(str => str.match(/<a(?:[\s\S]+?)href=['"](.+?)['"]/)[1])
        .filter(url => url.substr(0, 1) === '/' && url.substr(0, 2) !== '//')
        .map(url => parse(url).pathname);
};
