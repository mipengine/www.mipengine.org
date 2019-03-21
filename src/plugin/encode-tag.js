/**
 * @file encode-tag.js
 * @author clark-t (clarktanglei@163.com)
 */

module.exports = class EncodeTag {
  apply (on, app) {
    on(app.STAGES.AFTER_PARSE, function (html, options) {
      return html.replace(/\\&lt;([^\s]+?)>/g, '&lt;$1&gt;')
        .replace(/\\?\\</g, '&lt;')
        .replace(/\\>/g, '&gt;')
    })
  }
}
