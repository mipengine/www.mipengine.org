/**
 * @file add relative information to doc
 * @author tanglei (tanglei02@baidu.com)
 * @description 给文章底部增加 编辑 反馈 点赞 按钮
 */

module.exports = class Related {
  apply (on, app) {
    on(app.STAGES.AFTER_PARSE, (html, fileInfo) => {
      if (!fileInfo || !fileInfo.source || !fileInfo.source.from) {
        return
      }

      let from = fileInfo.source.from
      if (!/^github:/.test(from)) {
        return
      }

      let github = from.replace(/^github:/, 'https://github.com/')
      let path = fileInfo.path.split('/').slice(1).join('/')
      let edit = github + `/edit/master/${path}`

      return `
            ${html}
            <div class="md-related-wrapper">
                <a class="md-related to-feedback ui-dep-2"
                    target="_blank"
                    href="${github}/issues/new?title=反馈：${path}"
                >
                    <i class="material-icons"></i>反馈
                </a>
            </div>
        `

      // return `
      //       ${html}
      //       <div class="md-related-wrapper">
      //           <a class="md-related to-edit ui-dep-2" href="${edit}" target="_blank">
      //               <i class="material-icons"></i>编辑
      //           </a>
      //           <a class="md-related to-feedback ui-dep-2"
      //               target="_blank"
      //               href="${github}/issues/new?title=反馈：${path}"
      //           >
      //               <i class="material-icons"></i>反馈
      //           </a>
      //       </div>
      //   `
    })
  }
}
