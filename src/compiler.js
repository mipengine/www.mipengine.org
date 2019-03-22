/**
 * @file doc component
 * @author clark-t (clarktanglei@163.com)
 */

const Kram = require('kram').Kram
const plugin = require('./plugin')
const conf = require('./config')

let config = Object.assign({plugin}, conf)

let compiler = new Kram(config)

Object.assign(compiler, {
  get (type, key) {
    return compiler.store.get(type, key)
  },

  async getMenuByUrl (url) {
    let menuPath = getMenuPath(compiler.config.menus, url)

    if (!menuPath) {
      return
    }

    return compiler.getMenu(menuPath)
  },

  async getDocByUrl (url) {
    url = await getAlias(compiler.config.alias, url, compiler)
    let docPath = await compiler.store.get('doc-url-path', url)

    if (docPath) {
      return compiler.getDoc(docPath)
    }

    let menuPath = getMenuPath(compiler.config.menus, url)

    if (!menuPath) {
      return
    }

    return compiler.getDoc(menuPath)
  },

  async getUrl (path) {
    let route = await getRoute(config.routes, path)
    if (!route) {
      console.log('couldn\'t find route')
      console.log(path)
    }
    return route && (typeof route.url === 'string'
      ? route.url : route.url(path))
  },

  async getMenuPath (url) {
    url = await getAlias(config.alias, url, compiler)
    return getMenuPath(config.menus, url)
  },

  async getList (path) {
    let list = await compiler.getMenu(path)

    if (!list) {
      return
    }

    list = await Promise.all(
      (list || []).filter(item => !!item.children)
        .map(async item => {
          let url

          if (item.url) {
            url = item.url
          } else {
            url = await compiler.getUrl(item.path)
          }

          return Object.assign({}, item, {url})
        })
    )

    return list
  },

  getFileInfo (path) {
    return compiler.module.file.fileInfo(path)
  }
})

async function getAlias (config, url, compiler) {
  if (!config || !config.length) {
    return url
  }
  for (let i = 0; i < config.length; i++) {
    if (config[i].url.test(url)) {
      let alias = await config[i].alias(url, compiler)
      if (alias) {
        return alias
      }
    }
  }

  return url
}

function getMenuPath (config, url) {
  for (let i = 0; i < config.length; i++) {
    if (config[i].url.test(url)) {
      let menuPath = config[i].menu(url)
      if (menuPath) {
        return menuPath
      }
    }
  }
}

function getRoute (config, path) {
  for (let i = 0; i < config.length; i++) {
    let route = config[i]

    switch (typeof route.path) {
      case 'string':
        if (route.path === path) {
          return route
        }

        break

      case 'object':
        if (route.path.test(path)) {
          return route
        }

        break

      case 'function':
        if (route.path(path)) {
          return route
        }

        break

      default:
        break
    }
  }
}

module.exports = compiler
