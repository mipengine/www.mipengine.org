/**
 * @file sidebar导航
 * @description 由 source/_data/sidebar.yml 配置生成
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* global hexo */

'use strict';

hexo.extend.helper.register('sidebar', function () {
    const self = this;
    const type = self.page.canonical_path.split('/')[0];
    const tree = self.site.data.sidebar[type];
    let result = '';

    if (!tree) {
        return '';
    }

    Object.keys(tree).forEach(title => {
        const menu = tree[title];

        result += `<h3>${title}</h3>`;

        Object.keys(menu).forEach(text => {
            const link = menu[text];
            let itemClass = '';
            if (link.substr(1) === self.path) {
                itemClass += ' class="current"';
            }
            result += `<a href="${link}"${itemClass}>${text}</a>`;
        });
    });

    return result;
});
