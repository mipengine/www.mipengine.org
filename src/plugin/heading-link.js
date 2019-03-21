/**
 * @file heading link
 * @author tanglei (tanglei02@baidu.com)
 * @description 给 h1 - h6 在 hover 情况下显示链接图标
 */

module.exports = class HeadingLink {
  apply (on, app) {
    on(app.STAGES.RENDER_HEADING,
      html => html.replace(
        /<h([\s\S]+)data-hash="(.+?)">([\s\S]+)<\/h([1-9])>/mg,
        (full, props, hash, content, level) => '' +
          `<h${props}data-hash="${hash}">` +
          `<a href="${hash}" class="heading-link">` +
          '<i class="fa fa-link" aria-hidden="true"></i>' +
          `</a>${content}` +
          `</h${level}>`
      ), 10051)
  }
}
