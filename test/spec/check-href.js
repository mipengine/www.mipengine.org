/**
 * @file 检查本地链接是否有死链
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* eslint-disable max-nested-callbacks */

'use strict';

const path = require('path');
const expect = require('chai').expect;
const data = require('../getHTML')();
const parse = require('../parseHref');
const util = require('../../tools/util');
const mipDir = path.resolve(__dirname, '../../dist/');

describe('检查死链', () => {
    let map = {};

    data.forEach(val => {
        const urls = parse(val.html).map(url => {
            if (url.slice(-1) === '/') {
                url += 'index.html';
            }

            return url;
        });

        urls.forEach(url => {
            map[url] = 1;
        });
    });

    Object.keys(map).forEach(url => {
        it(url, () => {
            const filepath = path.resolve(mipDir, url.substr(1));

            expect(util.fileExists(filepath)).to.be.true;
        });
    });
});
/* eslint-enable max-nested-callbacks */
