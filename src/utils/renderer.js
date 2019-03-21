/**
 * @file renderer.js
 * @author clark-t (clarktanglei@163.com)
 */

const path = require('path')
const etpl = require('etpl')
const viewDir = path.resolve(__dirname, '../views')

const engine = new etpl.Engine({
  commandOpen: '{{',
  commandClose: '}}',
  strip: true,
  namingConflict: 'override',
  dir: viewDir,
  extname: '.tpl'
})

const tplList = [
  'layout-navbar.tpl',
  'layout.tpl',
  'layout-index.tpl',
  'layout-doc.tpl',
  'layout-codelab.tpl',
  'layout-codelab-detail.tpl',
  'layout-components-index.tpl',
  'markdown-breadcrumb.tpl',
  'markdown-toolbar.tpl',
  'markdown-paginator.tpl',
  'preview-case.tpl',
  'preview-edit.tpl',
  'preview-component.tpl'
]

for (let i = 0; i < tplList.length; i++) {
  engine.loadFromFile(path.resolve(viewDir, tplList[i]))
}

engine.addFilter('json', function (obj) {
  if (!obj) {
    return obj
  }
  return JSON.stringify(obj)
  // return JSON.stringify(obj).replace(/\//g, '\\\/')
})

module.exports = engine
