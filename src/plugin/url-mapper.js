/**
 * @file url mapper
 * @author tanglei (tanglei02@baidu.com)
 */

module.exports = class UrlMapper {
  apply (on, app) {
    on(app.STAGES.START, async () => {
      let entryPaths = await app.store.get('data', 'docurls')
      if (!entryPaths) {
        entryPaths = {}
      }
      await app.store.set('data', 'docurls', entryPaths)
    })

    on(app.STAGES.CREATE_DOC_STORE_OBJECT, async obj => {
      await app.store.set('doc-url-path', obj.url, obj.path)

      let entryPaths = await app.store.get('data', 'docurls')
      entryPaths[obj.path] = obj.url
      await app.store.set('data', 'docurls', entryPaths)
    }, 10050)
  }
}
