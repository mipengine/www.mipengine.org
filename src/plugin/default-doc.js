/**
 * @file default document
 * @author tanglei (tanglei02@baidu.com)
 * @description 对于缺省的文档 url，如 /guide /pwa 则默认返回该路由对应的目录结构下的第一篇文章
 */
const utils = require('../utils/basic')

module.exports = class DefaultDoc {
  apply (on, app) {
    let menuConfig = app.config.menus
    let map = {}

    on(app.STAGES.CREATE_DOC_STORE_OBJECT, obj => {
      // 找出文档 url 所匹配的目录
      let config = menuConfig.find(config => config.url.test(obj.url) && config.menu(obj.url))

      if (!config) {
        if (obj.url.indexOf('codelabs') > -1) {
          console.log(obj.path + ' 找不到 config')
        }
        return
      }

      // 找到匹配的目录路径，就缓存起来
      let menuPath = config.menu(obj.url)
      map[menuPath] = true
    }, 10050)

    on(app.STAGES.DONE, async () => {
      await Promise.all(
        Object.keys(map).map(async menuPath => {
          // let url = await app.getUrl(menuPath)
          // if (await app.store.get('doc-url-path', url)) {
          //   return
          // }

          // 找出文档目录信息
          let menu = await app.getMenu(menuPath)
          if (!menu) {
            if (menuPath.indexOf('codelabs') > -1) {
              console.log(menuPath + ' 找不到 menu')
            }
            return
          }

          // 找出文档目录中第一篇文章
          let node = utils.firstNode(menu)
          let docInfo = await app.getDoc(node.path)

          if (!docInfo) {
            if (menuPath.indexOf('codelabs') > -1) {
              console.log(menuPath + ' 找不到 docInfo')
            }
            return
          }

          // 只有在内存里可以这么搞
          // docInfo.isFirst = true
          // entryPaths.push(menuPath)

          let url = await app.getUrl(menuPath)
          let info = Object.assign({}, docInfo, {url})

          await app.store.set('doc', menuPath, info)
          await app.store.set('doc-url-path', url, menuPath)

          let entryPaths = await app.store.get('data', 'docurls')
          entryPaths[menuPath] = url
          await app.store.set('data', 'docurls', entryPaths)
        })
      )

      // await app.store.set('data', 'docurls', entryPaths)

      // 清空缓存
      map = {}
    }, 10052)
  }
}
