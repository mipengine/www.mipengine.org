/**
 * @file 生成时间轴所需数据
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* global hexo */
/* eslint-disable max-nested-callbacks */

'use strict';

const data = require('../tools/changelog.json');

/**
 * 导航映射
 *
 * @const
 * @type {Object}
 */
const NAV_ALIAS = {
    all: '查看全部',
    summary: 'MIP周报',
    widget: '组件',
    layout: '组件布局',
    validator: '校验',
    mipjs: 'mip.js',
    mipcss: 'mip.css'
};

// 生成右侧单个内容
hexo.extend.helper.register('timeline_item', () => {
    return data.map(val => {
        let link = '';
        let version = '';
        let changes = '';

        if (val.link) {
            link = Object.keys(val.link)
                .map(text => `<a target="_blank" href="${val.link[text]}">${text}</a>`)
                .join('<span class="timeline-split">，</span>');
        }

        if (val.version) {
            version = `<span>v${val.version}</span>`;
        }

        if (val.changelog && val.changelog.length) {
            changes = val.changelog.map(text => `<li>${text}</li>`).join('');
            changes = `<ul>${changes}</ul>`;
        }

        return `
            <div class="filter-item" data-filtertype="${val.type}">
                <div class="timeline-time">${val.time}</div>
                <div class="timeline-title-wrap">
                    <span class="timeline-title">${val.title}</span>${version}${link}
                </div>
                ${changes}
            </div>`;
    }).join('');
});

// 生成导航
hexo.extend.helper.register('timeline_nav', () => {
    let sort = [
        {
            type: 'widget',
            sort: '1'
        },
        {
            type: 'layout',
            sort: '2'
        },
        {
            type: 'validator',
            sort: '3'
        },
        {
            type: 'mipjs',
            sort: '4'
        },
        {
            type: 'mipcss',
            sort: '5'
        }
    ];

    // 统计个数
    data.forEach(val => {
        val.type.split(/\s+/).forEach(type => {
            let index = sort.map(val => val.type).indexOf(type);

            if (index === -1) {
                index = sort.push({
                        type: type,
                        sort: type
                    }) - 1;
            }

            if (!sort[index].hasOwnProperty('count')) {
                sort[index].count = 0;
            }

            sort[index].count += 1;
        });
    });

    // 排序
    sort.sort((a, b) => {
        return a.sort < b.sort ? -1 : 1;
    });

    // 追加全部
    sort.unshift({
        type: 'all',
        count: data.length
    });

    // 文本映射
    sort.forEach(val => val.text = NAV_ALIAS[val.type] || val.type);

    return sort.map(val => {
        return `
            <li class="filter-title">
                <div class="filter-link" data-filtertype="${val.type}">
                    ${val.text}<span class="filter-num">${val.count}</span>
                </div>
            </li>`;
    }).join('');
});
/* eslint-enable max-nested-callbacks */
