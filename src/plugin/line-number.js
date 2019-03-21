/**
 * @file code line number
 * @author tanglei (tanglei02@baidu.com)
 * @description 给代码块增加行号
 */

module.exports = class LineNumber {
  apply (on, app) {
    on(app.STAGES.RENDER_CODE, (html, {args}) => {
      let codeWithLineNumber = html.replace(
        /^<pre><code(.*?)>([\s\S]+)<\/code><\/pre>$/mg,
        function (full, lang, code) {
          let index = '' +
            '<div class="code-index">' +
            code.split('\n').map((c, i) => `<div>${i + 1}</div>`).join('') +
            '</div>'

          return `<pre>${index}<code${lang}>${code}</code></pre>`
        }
      )

      return codeWithLineNumber
    }, 9999)
  }
}
