/**
 * @file static.js
 * @author clark-t (clarktanglei@163.com)
 */

const fs = require('fs-extra')
const path = require('path')
const renderer = require('../utils/renderer')

// const css = fs.readFileSync(path.resolve(__dirname, '../style/dist/index.css'))
// const navbar = require('../data/navbar')

module.exports = class Static {
  apply (on, app) {
    let dist = path.resolve('../..')
    // let dist = path.resolve(process.cwd())

    on(app.STAGES.DONE, async () => {
      let docPaths = await app.store.get('data', 'docurls')

      await Promise.all(Object.keys(docPaths).map(async docPath => {
        let obj = await app.store.get('doc', docPath)
        let pathname = path.resolve(dist, obj.url.replace(/^\//, '').replace(/\.html$/, '') + '.html')

        await fs.ensureDir(path.dirname(pathname))
        await fs.writeFile(pathname, obj.html, 'utf-8')
      }))

      await fs.copy(path.resolve(dist, 'v2'), dist)

    }, 999999)
  }
}
