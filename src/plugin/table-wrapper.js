/**
 * @file table-wrapper.js
 * @author clark-t (clarktanglei@163.com)
 */

module.exports = class TableWrapper {
  apply (on, app) {
    on(app.STAGES.RENDER_TABLE, (html, {args}) => {
      return `<div class="md-table-wrapper">${html}</div>`
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
