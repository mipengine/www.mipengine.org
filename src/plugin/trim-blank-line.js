/**
 * @file remove code area blank endline
 * @author tanglei (tanglei02@baidu.com)
 * @description 将代码块的前后空格、换行符等等干掉，不然代码块在显示的时候会存在诡异间隙
 */

module.exports = class TrimBlankLine {
  apply (on, app) {
    on(app.STAGES.RENDER_CODE, (html, {args}) => {
      html = html.replace(
        /^<pre><code(.*?)>([\s\S]+)<\/code><\/pre>$/mg,
        function (full, lang, code) {
          code = code.replace(/^\s+/, '').replace(/\s+$/, '')
          return `<pre><code${lang}>${code}</code></pre>`
        }
      )

      return html
    })
  }
}
