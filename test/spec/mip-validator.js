/**
 * @file check mip-validator
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const expect = require('chai').expect;
const data = require('../getMIP')();
const validator = require('mip-validator')();
const reporter = require('../../tools/cli-reporter');

describe('检查 MIP 页面规范', () => {
    data.forEach(val => {
        it(val.path, () => {
            const errors = validator.validate(val.html);

            if (errors.length) {
                reporter.error(JSON.stringify(errors, null, 4));
            }

            expect(errors).to.be.a('array').and.empty;
        });
    });
});
