/**
 * @file remove h1 - h6 id prop to avoid vue-router scroll bug
 * @author tanglei (tanglei02@baidu.com)
 * @description 去掉默认生成的 heading 标签的 id
 */

module.exports = class RemoveHeadingId {
  apply (on, app) {
    on(app.STAGES.RENDER_HEADING, html => html.replace(/id=".*?"/, ' '), 10050)
  }
}
