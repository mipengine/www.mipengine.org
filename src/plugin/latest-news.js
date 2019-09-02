/**
 * @file latest-news
 * @author clark-t (clarktanglei@163.com)
 * @description 将最新的一篇文章信息作为通知的 index.html
 */

module.exports = class LatestNews {
  apply (on, app) {
    on(app.STAGES.DONE, async () => {
      let item = await app.getMenuItem('docs/news')
      if (!item || !item.children || !item.children.length) {
        return
      }

      let newsIndex = item.children[0]
      let docInfo = await app.getDoc(newsIndex.path)
      if (!docInfo) {
        return
      }

      let indexInfo = Object.assign({}, docInfo)
      let path = 'docs/news/index.md'
      let url = await app.getUrl(path)
      indexInfo.path = path
      indexInfo.url = url

      let entryPaths = await app.store.get('data', 'docurls')
      entryPaths[path] = url
      await app.store.set('doc', path, indexInfo)
      await app.store.set('data', 'docurls', entryPaths)
    }, 10055)

    on(app.STAGES.DONE, async () => {
      let item = await app.getMenuItem('docs/news')
      if (!item || !item.children || !item.children.length) {
        return
      }

      let newsIndex = item.children[0]
      if (!newsIndex.banner) {
        return
      }
      // 超时
      if (newsIndex.end) {
        if (new Date(newsIndex.end) < new Date()) {
          return
        }
      }

      let indexInfo = await app.getDoc('docs/index')
      indexInfo.html = indexInfo.html.replace(
        '<!-- banner -->',
        `<div class="index-banner ${newsIndex.banner.type || 'info'}">` +

        '<div class="container">' +
        `<a href="${app.config.host + newsIndex.url}">` +
        newsIndex.banner.contents.map(text => `<p>${text}</p>`).join('') +
        '</a></div></div>'
      )

      await app.store.set('doc', 'docs/index', indexInfo)

    }, 100005)
  }
}
