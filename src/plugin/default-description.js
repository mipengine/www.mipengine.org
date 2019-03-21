/**
 * @file 提取文章第一段文字作为默认的文章简介
 * @author tanglei (tanglei02@baidu.com)
 */

const cheerio = require('cheerio')

module.exports = class DefaultDescription {
  apply (on, app) {
    on(app.STAGES.CREATE_DOC_STORE_OBJECT, obj => {
      if (!obj.info || !obj.info.description) {
        let $ = cheerio.load(obj.html, {decodeEntities: false})
        obj.info = obj.info || {}
        obj.info.description = $('body').children('p').first().text()
        return obj
      }
    }, 9999)
  }
}
