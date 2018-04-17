/**
 * @file 渲染 markdown
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* global hexo */

'use strict';

const marked = require('marked');
const highlight = require('highlight.js');
const renderer = new marked.Renderer();

/**
 * 修改渲染head时候的id属性
 *
 * @param  {string} text  文本
 * @param  {string} level 标题等级
 *
 * @return {string}
 */
renderer.heading = (text, level) => `<h${level} id="markdown-doc-${encodeURIComponent(text)}">${text}</h${level}>`;


/**
 * 提示关键词列表
 *
 * @const
 * @type {Object}
 */
const TIPS_MAP = {
    info: {
        icon: 'fa-info-circle',
        text: '提示：'
    },
    notice: {
        icon: 'fa-exclamation-triangle',
        text: '注意：'
    },
    warning: {
        icon: 'fa-window-close',
        text: '警告：'
    }
};

/**
 * 扩展提醒语法
 *
 * @param  {string} content 文本
 *
 * @return {string}
 */
renderer.paragraph = content => {
    const reg = new RegExp(`^\\[(${Object.keys(TIPS_MAP).join('|')})\\]\\s*`);
    const matched = String(content).match(reg);
    const type = matched ? matched[1] : null;

    // 没有匹配到，直接返回个段落
    if (!type) {
        return `<p>${content}</p>`;
    }

    const icon = TIPS_MAP[type].icon;
    const text = TIPS_MAP[type].text;
    const after = content.replace(matched[0], '');

    return [
        '<p class="para-tip para-' + type + '">',
            '<i class="fa ' + icon + '" aria-hidden="true"></i>',
            '<span class="para-content"><span class="para-tip-text">' + text + '</span>' + after + '</span>',
        '</p>'
    ].join('\n');
};

/**
 * 高亮代码
 *
 * @param  {string} content 内容
 * @param  {string | undefined} lang 语言名称
 *
 * @return {string}
 */
renderer.code = (content, lang) =>
    `<pre><code class="hljs lang-${lang || ''}">${highlight.highlightAuto(content).value}</code></pre>`;

hexo.extend.renderer.register('md', 'html', data => marked(data.text, {renderer}), true);
