/**
 * @file 处理文档的修改按钮
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* global hexo */

'use strict';

const components = require('../tools/components.js');

hexo.extend.helper.register('raw_link', path => {
    // 单独处理组件文档
    if (path.indexOf('examples/') === 0) {
        const name = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));

        // 如果是核心组件
        if (components.isCore(name)) {
            return `https://github.com/mipengine/mip/edit/master/src/components/${name}.md`;
        }

        // 处理广告，因为广告是多个 markdown 在一个组件内
        if (path === 'examples/mip-ad/mip-ad.md') {
            return 'https://github.com/mipengine/mip-extensions/edit/master/src/mip-ad/README.md';
        }
        else if (path.replace('examples/', '').indexOf('mip-ad/') === 0) {
            return `https://github.com/mipengine/mip-extensions/edit/master/src/${path.replace('examples/', '')}`;
        }

        return `https://github.com/mipengine/mip-extensions/edit/master/src/${name}/README.md`;
    }

    return `https://github.com/mipengine/www.mipengine.org/edit/master/source/${path}`;
});
