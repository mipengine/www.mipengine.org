/**
 * @file document config
 * @author clark-t (clarktanglei@163.com)
 */

'use strict'

/* eslint-disable fecs-properties-quote */

const path = require('path')
const glob = require('glob')
const utils = require('./utils/basic')
const renderer = require('./utils/renderer')
// const download = require('download-git-repo')
const fs = require('fs-extra')
const componentsOptions = require('./data/components.json')
const typemap = {
  "布局": "layout",
  "呈现": "presentation",
  "媒体": "media",
  "动态内容": "dynamic-content",
  "广告": "ads",
  "社交": "social",
  "统计": "analytics"
}

function aglob (...args) {
  return new Promise((resolve, reject) => {
    glob(...args, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

let rootDir = path.resolve(__dirname, '..')
let tmpDir = path.resolve(rootDir, 'tmp')
let docDir = path.resolve(tmpDir, 'doc')
// let gitDir = path.resolve(tmpDir, 'git')

const urlPrefix = '/v2/'

module.exports = {
  // host: process.env.NODE_ENV === 'development' ? '' : 'https://mip-project.github.io',
  host: process.env.NODE_ENV === 'development' ? '' : 'https://www.mipengine.org',
  basePath: docDir,
  rootPath: rootDir,
  sources: [
    {
      name: 'docs',
      loader: 'copy',
      from: path.resolve(__dirname, '../../mip2/docs'),
      to: path.resolve(docDir, 'docs')
    }
  ],
  loader: {
    copy
  },
  routes: [
    {
      path: /\.(png|jpg|gif)$/,
      url (filePath) {
        try {
          let dist = path.resolve(rootDir, 'v2/assets/img/' + filePath)
          fs.ensureDirSync(path.dirname(dist))
          fs.copySync(path.resolve(docDir, filePath), dist)
        } catch (e) {
          console.error(e)
        }
        filePath = urlPrefix + 'assets/img/' + filePath
        return filePath
      }
    },
    {
      path: /^docs\/index$/,
      url (filePath) {
        return urlPrefix + 'index.html'
      }
    },
    {
      path: /^docs\/about$/,
      url (filePath) {
        return urlPrefix + 'about/index.html'
      }
    },
    {
      path: /^docs\/docs$/,
      url (filePath) {
        return urlPrefix + 'docs.html'
      }
    },
    {
      path: /^docs\/codelabs$/,
      url (filePath) {
        return urlPrefix + 'codelabs/index.html'
      }
    },
    {
      path: /^docs\/api$/,
      url (filePath) {
        return urlPrefix + 'api/index.html'
      }
    },
    {
      path: /^docs\/components$/,
      url (filePath) {
        return urlPrefix + 'components/index.html'
      }
    },
    {
      path: /^docs\/contribute$/,
      url (filePath) {
        return urlPrefix + 'contribute/index.html'
      }
    },
    {
      path: /^docs\/about/,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }
        return urlPrefix + filePath.slice(5)
      }
    },
    {
      path: /^docs\/docs/,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }
        return urlPrefix + filePath.slice(5)
      }
    },
    {
      path: /^docs\/contribute/,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }
        return urlPrefix + filePath.slice(5)
      }
    },
    {
      path: /^docs\/components/,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }

        return urlPrefix + filePath
      }
    },
    // {
    //   path: /^docs\/guide/,
    //   url (filePath) {
    //     let [pathname, hash] = filePath.split('#')
    //     if (/\.md$/.test(pathname)) {
    //       pathname = urlPrefix + pathname.slice(5, -3) + '.html'
    //       return pathname + (hash != null ? `#${hash}` : '')
    //     }
    //     return urlPrefix + filePath.slice(5)
    //   }
    // },
    {
      path: /^docs\/api/,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }
        return urlPrefix + filePath.slice(5)
      }
    },
    {
      path: /^docs\/codelabs\//,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }
        return urlPrefix + filePath.slice(5)
      }
    },
    {
      path: /^docs\/news/,
      url (filePath) {
        let [pathname, hash] = filePath.split('#')
        if (/\.md$/.test(pathname)) {
          pathname = urlPrefix + pathname.slice(5, -3) + '.html'
          return pathname + (hash != null ? `#${hash}` : '')
        }
        return urlPrefix + filePath.slice(5)
      }
    }
    // ,
    // {
    //   path: /^docs\/ui/,
    //   url (filePath) {
    //     let [pathname, hash] = filePath.split('#')
    //     if (/\.md$/.test(pathname)) {
    //       pathname = urlPrefix + pathname.slice(5, -3) + '.html'
    //       return pathname + (hash != null ? `#${hash}` : '')
    //     }
    //     return urlPrefix + filePath.slice(5)
    //   }
    // }
  ],
  menus: [
    {
      url: /^\/v2\/about/,
      menu (url) {
        return 'docs/about'
      }
    },
    {
      url: /^\/v2\/docs/,
      menu (url) {
        return 'docs/docs'
      }
    },
    {
      url: /^\/v2\/components/,
      menu (url) {
        return 'docs/components'
      }
    },
    {
      url: /^\/v2\/contribute/,
      menu (url) {
        return 'docs/contribute'
      }
    },
    {
      url: /^\/v2\/api/,
      menu (url) {
        return 'docs/api'
      }
    },
    {
      url: /^\/v2\/codelabs/,
      menu (url) {
        let match = url.match(/^\/v2\/codelabs\/(.+?)(\/|$)/)
        if (match) {
          return `docs/codelabs/${match[1]}`
        }
        // return 'docs/codelabs'
      }
    },
    {
      url: /^\/v2\/news/,
      menu (url) {
        return 'docs/news'
      }
    }
    // ,
    // {
    //   url: /^\/v2\/ui/,
    //   menu (url) {
    //     return 'docs/ui'
    //   }
    // }
  ]
  // ,
  // alias: [
  //   {
  //     url: /^\/v2\/contribute$/,
  //     async alias (url, compiler) {
  //       let menu = await compiler.getMenu('contribute')

  //       if (!menu) {
  //         return
  //       }

  //       menu = menu.filter(item => !!item.children)
  //       let node = utils.firstNode(menu)
  //       return node && node.url
  //     }
  //   }
  // ]
  // alias: [
  //     {
  //         url: /^\/guide$/,
  //         async alias(url, compiler) {
  //             let menu = await compiler.getMenu('lavas');

  //             if (!menu) {
  //                 return;
  //             }

  //             menu = menu.filter(item => !!item.children);
  //             let node = utils.firstNode(menu);
  //             return node && node.url;
  //         }
  //     }
  // ]
}

async function copy ({to}) {
  let main = path.resolve(__dirname, '../../mip2/docs')
  let mip1 = path.resolve(__dirname, '../../mip-extensions/src')
  let mip2 = path.resolve(__dirname, '../../mip2-extensions/components')
  let mip2builtin = path.resolve(main, 'components/builtin')
  // let mip2ui = path.resolve(__dirname, '../../mip2-ui-components/docs')

  await fs.copy(main, to)
  await fs.remove(path.resolve(to, 'components/builtin'))

  let distExtensions = path.resolve(to, 'components')

  let mip1files = await aglob('**/*.md', {
    root: mip1,
    cwd: mip1
  })

  let mip1infos = mip1files.map(filename => {
    let absolute = path.resolve(mip1, filename)
    let foldername = filename.split('/').slice(-2, -1)[0]
    if (/mip-(.+)?\/README\.md/.test(filename)) {
      filename = filename.replace(/mip-(.+)?\/README\.md$/, 'mip-$1/mip-$1.md')
    }
    filename = filename.replace(/mip-.+?\/mip-(.+?)\.md$/, 'mip-$1.md')
    // if (mip1files.filter(f => f.indexOf(foldername) > -1).length === 1) {
    //   filename = filename.replace(/mip-(.+)?\/mip-\1\.md$/, 'mip-$1.md')
    // }

    for (let i = 0; i < componentsOptions.length; i++) {
      if (foldername === componentsOptions[i].name) {
        let type = componentsOptions[i].type
        let dist = path.resolve(distExtensions, typemap[type],filename)
        return {
          absolute,
          dist,
          name: foldername
        }
      }
    }
  }).filter(obj => obj != null)

  let mip2files = await aglob('**/*.md', {
    root: mip2,
    cwd: mip2
  })

  let mip2infos = mip2files.map(filename => {
    let absolute = path.resolve(mip2, filename)
    let foldername = filename.split('/').slice(-2, -1)[0]
    if (/mip-(.+)?\/README\.md/.test(filename)) {
      filename = filename.replace(/mip-(.+)?\/README\.md$/, 'mip-$1/mip-$1.md')
    }
    filename = filename.replace(/mip-.+?\/mip-(.+?)\.md$/, 'mip-$1.md')
    // if (mip2files.filter(f => f.indexOf(foldername) > -1).length === 1) {
    //   filename = filename.replace(/mip-(.+)?\/mip-\1\.md$/, 'mip-$1.md')
    // }

    for (let i = 0; i < componentsOptions.length; i++) {
      if (foldername === componentsOptions[i].name) {
        let type = componentsOptions[i].type
        let dist = path.resolve(distExtensions, typemap[type],filename)
        return {
          absolute,
          dist,
          name: foldername
        }
      }
    }
  }).filter(obj => obj != null)

  let mip2builtins = await aglob('*.md', {
    root: mip2builtin,
    cwd: mip2builtin
  })

  mip2builtins = mip2builtins.map(filename => {
    let foldername = filename.split('/').slice(-1)[0].slice(0, -3)
    for (let i = 0; i < componentsOptions.length; i++) {
      if (foldername === componentsOptions[i].name) {
        let type = componentsOptions[i].type
        let dist = path.resolve(distExtensions, typemap[type], filename)
        return {
          absolute: path.resolve(mip2builtin, filename),
          dist,
          name: foldername
        }
      }
    }
  }).filter(obj => obj != null)


  // FIXME 随便实现的，如有效率更高的方式请改之
  let mip2length = mip2infos.length
  let newList = mip2infos.slice().concat(mip2builtins)

  for (let i = 0; i < mip1infos.length; i++) {
    let j
    for (j = 0; j < newList.length; j++) {
      if (mip1infos[i].dist === newList[j].dist) {
        newList[j].mip1 = mip1infos[i].absolute
        break
      }
    }

    if (j === newList.length) {
      newList.push(mip1infos[i])
    }

    // if (j === mip2length) {
    //   if (mip2builtins.every(builtin => builtin.dist !== mip1infos[i].dist)) {
    //     mip2infos.push(mip1infos[i])
    //   }
    // }
  }

  // mip2infos = mip2infos.concat(mip2builtins)

  newList.sort((a, b) => a.dist.localeCompare(b.dist))

// console.log(JSON.stringify(newList.filter(a => a.absolute.indexOf('ad') > -1), null, 2))
// console.log(JSON.stringify(newList.filter(a => a.absolute.indexOf('ad') > -1), null, 2))

  newList.map(({absolute, dist, mip1}) => {
    fs.copySync(absolute, dist)

    let settingDir = path.resolve(absolute, '..', 'setting')

    if (!fs.existsSync(settingDir)) {
      // mip2 组件的文档没有 preset 所以先暂时拿 mip1 的代替
      if (!mip1) {
        return
      }

      settingDir = path.resolve(mip1, '..', 'setting')

      if (!fs.existsSync(settingDir)) {
        return
      }
    }

    let distSettingDir = path.resolve(dist, '..', 'setting')
    let componentSettingDir = path.resolve(distSettingDir, path.basename(dist, path.extname(dist)))

    fs.ensureDirSync(distSettingDir)
    fs.removeSync(componentSettingDir)
    fs.copySync(settingDir, componentSettingDir)
  })

  componentsOptions.sort((a, b) => a.name.localeCompare(b.name))

  let data = {
    layout: componentsOptions.filter(a => a.type ==='布局'),
    presentation: componentsOptions.filter(a => a.type ==='呈现'),
    media: componentsOptions.filter(a => a.type ==='媒体'),
    dynamicContent: componentsOptions.filter(a => a.type ==='动态内容'),
    ads: componentsOptions.filter(a => a.type ==='广告'),
    social: componentsOptions.filter(a => a.type ==='社交'),
    analytics: componentsOptions.filter(a => a.type ==='统计'),
  }

  let componentIndexMarkdown = renderer.render('layout-components-index', data)

  await fs.writeFile(path.resolve(distExtensions, 'index.md'), componentIndexMarkdown, 'utf-8')

  const genMetaJson = async (full, name) => {
    let metaJson = {
      menu: full[name].map(data => {
        return {
          key: data.name,
          name: data.name + (data.chinese ? ` ${data.chinese}` : ''),
          preview: data.preview || false
        }
      })
    }

    await fs.writeFile(path.resolve(distExtensions, name.replace(/([A-Z])/, '-$1').toLowerCase(), 'meta.json'), JSON.stringify(metaJson), 'utf-8')
  }

  Object.keys(data).forEach(key => {
    genMetaJson(data, key)
  })
}

// fs.removeSync(path.resolve(docDir, 'docs'))
// copy({to: path.resolve(docDir, 'docs')})

