/**
 * @file highlight paragraph
 * @author tanglei (tanglei02@baidu.com)
 * @description 给 markdown 的段落增加增强语法
 */

/**
 * 当满足如下语法时，p 会显示不同的颜色
 * ```markdown
 *
 * info 整个段落底色会变成绿色
 *
 * [info]abc
 *
 *
 * error || warn || warning 整个段落底色会变成红色
 *
 * [warning]asdfasdfa
 *
 * notice 整个段落底色会变成橙色
 *
 * [notice]dafdsa
 *
 * ```
 */

const regex = /<p>\s*\[(info|warn|warning|error|notice)\]/

module.exports = class HighlightParagraph {
  apply (on, app) {
    on(app.STAGES.RENDER_PARAGRAPH, (html, {args}) => {
      return html.replace(regex, (str, key) => {
        switch (key) {
          case 'info':
            return '<p class="md-p-info"><i class="iconfont icon-info"></i><strong>提示：</strong>'
          case 'notice':
            return '<p class="md-p-notice"><i class="iconfont icon-warn"></i><strong>注意：</strong>'
          case 'error':
          case 'warn':
          case 'warning':
            return '<p class="md-p-warn"><i class="iconfont icon-error"></i><strong>警告：</strong>'
        }
      })
    })
  }
}

// function chunk(arr, size) {
//     let output = [];
//     for (let i = 0, max = arr.length; i < max; i += size) {
//         output.push(arr.slice(i, i + size));
//     }

//     return output;
// }

// function decodeQuote(str) {
//     return str.replace(/&quot;/mg, '"').replace(/&apos;/mg, '\'');
// }

// function tag(tag, content = '', props = '') {
//     return `<${tag} ${props}>${content}</${tag}>`;
// }
