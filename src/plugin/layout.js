/**
 * @file layout.js
 * @author clark-t (clarktanglei@163.com)
 */

const imageSize = require('../utils/image-size')
const path = require('path')
const fs = require('fs')
const renderer = require('../utils/renderer')
let navbarFactory = require('../data/navbar')
// const migPageProcess = require('../utils/mip-img-process')

let css

try {
  css = fs.readFileSync(path.resolve(__dirname, '../style/dist/index.css'))
} catch (e) {
  css = ''
}

// 只保留到 h4
function walk (chapters) {
  if (!Array.isArray(chapters)) {
    return
  }

  for (let i = 0; i < chapters.length; i++) {
    if (chapters[i].level === 4) {
      delete chapters[i].children
    }

    if (chapters[i].children) {
      walk(chapters[i].children)
    }
  }
}

module.exports = class Layout {
  apply (on, app) {
    // on(app.STAGES.START, async () => {
    //   await processNavbar(navbar, app)
    // })

    on(app.STAGES.DONE, async () => {
      let docPaths = await app.store.get('data', 'docurls')

      await Promise.all(Object.keys(docPaths).map(async docPath => {
        let docInfo = await app.store.get('doc', docPath)
        let {html: originalHtml, url, info, chapters, path} = docInfo

        walk(chapters)

        // 提取样式
        let {style, html} = extractStyle(originalHtml)

        // 将 <script type="application/json"></script> 块内部的双引号被转义的单引号双引号给替换回来
        html = scriptJson(html)

        // html 组件替换
        html = heading(html)
        html = link(html, app)
        html = await image(html, app)
        html = video(html, app)

        // 生成 menu 和 chapter
        let menu = await app.getMenuByUrl(url)

        // navbar = navbarActive(navbar, url)

        // 文档编辑、反馈链接
        let editLink = 'https://github.com/mipengine/mip2/edit/master/' + path
        let feedbackLink = 'https://github.com/mipengine/mip2/issues/new' + '?title=反馈:' + path

        let layoutName // 模板名称
        // codelab 单独处理

        if (url.indexOf('codelabs') > -1) {
          layoutName = 'layout-codelab-detail'
        } else {
          layoutName = 'layout-doc'
        }

        let navbar = navbarFactory()
        await processNavbar(navbar, app)

        let navIndex

        for (let i = 0; i < navbar.length; i++) {
          if (!navbar[i].children) {
            continue
          }

          for (let j = 0; j < navbar[i].children.length; j++) {
            let child = navbar[i].children[j]
            if (url === child.url || (child.activeUrl && child.activeUrl.test(url))) {
              navbar[i].aliasName = child.name
              navIndex = i
              break
            }
          }

          if (navIndex != null) {
            break
          }
        }

        // navbar[1].children.forEach(child => {
        //   let childUrl = child.url.split('/').slice(0, 3).join('/')
        //   if (url.indexOf(childUrl) === 0) {
        //     navbar[1].aliasName = child.name
        //   }
        // })

        let newhtml = renderer.render(layoutName, {
          title: 'MIP 文档_移动网页加速器_MIP(Mobile Instant Pages_)' + (info.title || ''),
          description: info.description || '',
          keywords: 'MIP2',
          originUrl: '',
          host: app.config.host,
          navbar: navbar,
          navIndex: navIndex,
          content: html,
          css: css + style.join(''),
          menu: processMenu(menu, app),
          chapters: chapters || {},
          url: app.config.host + url,
          development: process.env.NODE_ENV === 'development',
          last: info.pre,
          next: info.next,
          breadcrumbs: info.breadcrumbs || [],
          editLink: editLink,
          feedbackLink: feedbackLink,
          secondNavbarTitle: info.navbarTitle,
          menuInfo: info.menuInfo == null ? '' : Object.assign({}, info.menuInfo)
        })

        docInfo.html = newhtml

        await app.store.set('doc', docInfo.path, docInfo)
      }))

      let indexNavbar = navbarFactory()
      await processNavbar(indexNavbar, app)

      let indexHtml = renderer.render('layout-index', {
        title: 'MIP官网_移动网页加速器_MIP(Mobile Instant Pages)',
        description: 'MIP（Mobile Instant Pages - 移动网页加速器）是一套应用于移动网页的开放性技术标准，使用 MIP无需等待加载，页面内容将以更友好的方式瞬时到达用户。',
        keywords: 'MIP2',
        originUrl: '',
        host: app.config.host,
        navbar: indexNavbar,
        navIndex: 0,
        css: css,
        menu: {},
        chapters: {},
        url: app.config.host + '',
        development: process.env.NODE_ENV === 'development'
      })

      let indexPath = 'docs/index'
      let indexUrl = await app.getUrl(indexPath)

      await app.store.set('doc', indexPath, {
        path: indexPath,
        url: indexUrl,
        html: indexHtml
      })

      docPaths[indexPath] = indexUrl

      let codelabsMenu = await app.getMenu('docs/codelabs')

      let codelabNavbar = navbarFactory()
      await processNavbar(codelabNavbar, app)
      // codelabNavbar[1].name = 'Codelab'

      let url = '/v2/codelabs/index.html'
      let navIndex = null

      for (let i = 0; i < codelabNavbar.length; i++) {
        if (!codelabNavbar[i].children) {
          continue
        }

        for (let j = 0; j < codelabNavbar[i].children.length; j++) {
          let child = codelabNavbar[i].children[j]
          if (url === child.url || (child.activeUrl && child.activeUrl.test(url))) {
            codelabNavbar[i].aliasName = child.name
            navIndex = i
            break
          }
        }

        if (navIndex != null) {
          break
        }
      }

      let htmlCodelab = renderer.render('layout-codelab', {
        title: 'MIP 文档_移动网页加速器_MIP(Mobile Instant Pages) | CODELAB',
        description: '我们在 Codelab 中提供了一系列基于 MIP 的编程小项目，内容包括项目起步、配置教学、功能实现等等',
        keywords: 'Codelab',
        originUrl: '',
        host: app.config.host,
        navbar: codelabNavbar,
        navIndex: navIndex,
        css: css,
        menu: processMenu(codelabsMenu, app),
        chapters: {},
        url: app.config.host + url,
        development: process.env.NODE_ENV === 'development'
      })

      let codelabsPath = 'docs/codelabs'
      let codelabsUrl = await app.getUrl(codelabsPath)
      await app.store.set('doc', codelabsPath, {
        path: codelabsPath,
        url: codelabsUrl,
        html: htmlCodelab
      })

      docPaths[codelabsPath] = codelabsUrl
      await app.store.set('data', 'docurls', docPaths)

    }, 99999)
  }
}

/**
 * 将 文档中的 heading 中的 data-hash 替换成 id
 * 以激活浏览器默认的页面哈希跳转行为
 *
 * @param {string} html html
 * @return {string} 替换好的 html
 */
function heading (html) {
  return html.replace(
    /<h([1-9])([\s\S]+?)data-hash="#(.+?)">/mg,
    function (full, level, attr, hash) {
      return `<h${level} id="${hash}">`
    }
  )
}

function link (html, app) {
  return html.replace(
    /<a([\s\S]+?)href="(.+?)"([\s\S]*?)>/mg,
    function (full, attr1, href, attr2) {
      if (/^[a-z.]/.test(href) && (attr1 + attr2).indexOf('_blank') === -1) {
        return `<a data-type="mip" ${attr1} href="${href}" ${attr2}>`
      }
      // if (/^\/(guide|pwa|codelab)/.test(href)) {
      //     // let host = app.config.host;
      //     // href = `${host}/mip${href}`;
      //     // href = `/${href}`;
      //     return `<a data-type="mip" href="${href}">`;
      // }

      return full
    }
  )
}

/**
 * 将 文档中的 img 替换成 mip 组件
 *
 * @param {string} html html
 * @param {Kram} app kram 对象
 * @return {string} 替换好 img 的 html
 */
async function image (html, app) {
  const imgRegExp = /<img([\s\S]+?)src="([^ "]*?)"([\s\S]*?)>/mg

  let labels = html.match(imgRegExp)

  if (!labels) {
    return html
  }

  let srcs = labels.map(label => label.replace(imgRegExp, '$2').replace(/["']/g, ''))
    .map(src => {
      if (src === 'https://BabyLillian.github.io/images/授权登录.png') {
        src = 'https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/docs/shouquandenglu-d2c7f54d.png'
      } else if (src === 'https://BabyLillian.github.io/images/授权弹窗.png') {
        src = 'https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/docs/shouquantanchuang-e042e4fd.png'
      }

      return src
    })
  // let sizes = {
  //     width: 320,
  //     height: 320
  // };
  let sizes = await Promise.all(srcs.map(
    src => {
      src = src.replace(/^\//, '')
      // return  Promise.resolve({width: 320, height: 320})
      return getImageSize(
        src,
        app.config.rootDir,
        app.logger
      )
    }
  ))

  return html.replace(imgRegExp, (full, attr1, src) => {
    src = src.replace(/^\//, '')

    let {width, height} = sizes.shift()

    if (!/^http/.test(src) && !/^\/\//.test(src)) {
      let host = app.config.host
      src = `${host}/${src}`
    }

    let layout

    if (width <= 320) {
      layout = 'fixed'
    } else {
      layout = 'container'
    }

    // let {layout, addClass} = migPageProcess.processMipImgStyle(src, width, height)

    if (/\.gif($|\?|#)/.test(src)) {
      return `
        <mip-anim
          layout="${layout}"
          width="${width}"
          height="${height}"
          src="${src}"
        ></mip-anim>
            `
    }

    return `
      <span class="md-img-wrapper">
        <span class="md-img-wrapper-child">
          <mip-img
            layout="${layout}"
            width="${width}"
            height="${height}"
            src="${src}"
            popup
          ></mip-img>
        </span>
      </span>
      `
  })
}

/**
 * 将 文档中的 video 替换成 mip 组件
 *
 * @param {string} html html
 * @param {Kram} app kram 对象
 * @return {string} 替换好 video 的 html
 */
function video (html, app) {
  return html.replace(
    /<video([\s\S]+?)src="(.+?)"([\s\S]*?)>([\s\S]*?)<\/video>/mg,
    function (full, attr1, src, attr2, text) {
      let attr = attr1 + attr2
      let widthMatch = attr.match(/width="(.*?)"/m)
      let heightMatch = attr.match(/height="(.*?)"/m)

      let width = widthMatch && widthMatch.length ? widthMatch[1] : '320'
      let height = heightMatch && heightMatch.length ? heightMatch[1] : '320'

      if (!/^http/.test(src) && !/^\/\//.test(src)) {
        let host = app.config.host
        src = `${host}${src}`
      }
      /* eslint-disable max-len */
      return `<mip-video controls loop muted width="${width}" height="${height}" src="${src}">${text}</mip-video>`
      /* eslint-enable max-len */
    }
  )
}

/**
 * 提取 <style> 标签里的 css 进行合并
 *
 * @param {string} html html
 * @return {Object} 去除 style 标签的 html 和提取好的 css
 */
function extractStyle (html) {
  let style = []
  html = html.replace(
    /<style(.*?)>([\s\S]+?)<\/style>/mg,
    function (str, attr, styleCode) {
      style.push(styleCode)
      return ''
    }
  )

  return {style, html}
}

/**
 * [navbarActive description]
 * @param  {[type]} navbar [nabar列表]
 * @param  {[type]} url    [当前url]
 * @return {[type]}        [description]
 */
// function navbarActive (navbar, url) {
//   if (navbar && navbar.length) {
//     navbar.forEach(item => {

//       item.active = (item.activeUrl && new RegExp(item.activeUrl).test(url)) || false

//       if (item.name === '首页') {
//         console.log('++++++',url, '??', item)
//       }
//     })
//   }
//   return navbar
// }

/**
 * 获取图片尺寸因为 mip 要求
 *
 * @param {string} src 图片 url 地址
 * @param {string} basePath 本地图片的 base path
 * @param {Object} logger logger
 * @return {Object} 宽高对象
 */
async function getImageSize (src, basePath = '', logger) {
  try {
    if (/^http/.test(src)) {
      return await imageSize.getRemoteImageSize(src, logger)
    }

    if (/\s+/.test(src) || src === '') {
      return {width: 320, height: 320}
    }

    if (basePath) {
      src = path.resolve(basePath, src)
    }

    // console.log(src)

    return await imageSize.getLocalImageSize(src, logger)
  } catch (e) {
    return {width: 320, height: 320}
  }
}

async function processNavbar (navbar, app) {
  for (let i = 0; i < navbar.length; i++) {
    if (navbar[i].path) {
      navbar[i].url = app.config.host + await app.getUrl(navbar[i].path)
    }

    if (navbar[i].children && navbar[i].children.length) {
      await processNavbar(navbar[i].children, app)
    }
  }
}

function processMenu (menu, app, shouldDeepCopy = true) {
  if (!menu) {
    return
  }
  // deep copy 简单实现一下...
  if (shouldDeepCopy) {
    menu = JSON.parse(JSON.stringify(menu))
  }

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].url) {
      menu[i].url = app.config.host + menu[i].url
    }

    if (menu[i].children && menu[i].children.length) {
      processMenu(menu[i].children, app, false)
    }
  }

  return menu
}

function scriptJson (html) {
  return html.replace(
    /<mip-data([\s\S]*?)>\w*?<script type="application\/json">([\s\S]+?)<\/script>\w*?<\/mip-data>/mg,
    function (full, attrs, content) {
      content = content.replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/@@/g, ':')
        .replace(/@/g, '.')

      return '' +
`<mip-data${attrs}>
  <script type="application/json">${content}</script>
</mip-data>`
    }
  )
}

