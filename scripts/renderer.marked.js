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
 * 扩展提醒语法
 *
 * @param  {string} text 文本
 *
 * @return {string}
 */
renderer.paragraph = text => {
    const rexResults = text.match(/\[(.+)\]/);
    const tipType = rexResults ? rexResults[1] : '';
    let tipContent = text.replace(/\[(.+)\]/, '');
    let paraClass = '';
    let paraIcon = '';
    let result = '';

    switch (tipType) {
        case 'info':
            paraClass = ' class="para-tip para-info"';
            tipContent = '<span class="para-content">'
                + '<span class="para-tip-text">提示：</span>'
                + tipContent + '</span>';
            paraIcon = '\n<i class="fa fa-info-circle" aria-hidden="true"></i>\n';
            break;

        case 'notice':
            paraClass = ' class="para-tip para-notice"';
            tipContent = '<span class="para-content">'
                + '<span class="para-tip-text">注意：</span>'
                + tipContent + '</span>';
            paraIcon = '\n<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n';
            break;

        case 'warning':
            paraClass = ' class="para-tip para-warning"';
            tipContent = '<span class="para-content">'
                + '<span class="para-tip-text">警告：</span>'
                + tipContent + '</span>';
            paraIcon = '\n<i class="fa fa-window-close" aria-hidden="true"></i>\n';
            break;
    }

    result = '<p' + paraClass + '>\n' + paraIcon + tipContent + '</p>\n';
    return result;
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
