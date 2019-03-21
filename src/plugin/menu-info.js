/**
 * @file menu info
 * @author tanglei (tanglei02@baidu.com)
 * @description 为文章对象添加 menu 信息
 */
const navbarEngine = require('../data/navbar')
const navbar = navbarEngine()

module.exports = class MenuInfo {
  apply (on, app) {
    let needUpdate

    on(app.STAGES.GET_CHANGED_ENTRY_FILES, entryInfos => {
      needUpdate = entryInfos.some(info => info.type === 'remove' || info.type === 'add')
    }, 10050)

    on(app.STAGES.DONE, async () => {
      if (!needUpdate) {
        return
      }

      /* eslint-disable */

      let entryPaths = await app.getEntryPaths()
      if (!entryPaths || !entryPaths.length) {
          return;
      }

      // let allMenus = await app.getMenuItem()

      // if (!allMenus || !allMenus.length) {
      //     return;
      // }

      /* eslint-enable */

      await Promise.all(entryPaths.map(async entryPath => {
        let docInfo = await app.getDoc(entryPath)

        if (!docInfo) {
          return
        }

        // 查看该篇文章是否在目录中

        let menuPath = await app.getMenuPath(docInfo.url)

        if (!menuPath) {
          return
        }

        let menu = await app.getMenuItem(menuPath)

        if (!menu) {
          return
        }

        // console.log(Object.keys(tm))
        // console.log(Object.keys(menu))
        // 查找文章对应目录的名称

        // let menus = getBreadcrumbs(menuPath, allMenus)

        // if (menus) {
        //   docInfo.info.menuPath = menus.join('/')
        // }

        let breadcrumbs = getBreadcrumbs(entryPath, menu)

        if (breadcrumbs) {
          docInfo.info.breadcrumbs = breadcrumbs
        }

        let pre = getPre(entryPath, menu)

        if (pre) {
          docInfo.info.pre = pre
        }

        let next = getNext(entryPath, menu)

        if (next) {
          docInfo.info.next = next
        }

        let name = (menu.info && menu.info.name) || getNavName(entryPath, navbar)

        if (name) {
          docInfo.info.navbarTitle = name
        }

        if (menu.info) {
          docInfo.info.menuInfo = menu.info
        }

        let info = await app.getMenuItem(entryPath)

        if (info && info.preview != null) {
          docInfo.info.preview = info.preview
        }

        await app.store.set('doc', docInfo.path, docInfo)
      }))
    }, 10050)
  }
}

function getNavName (path, navbar) {
  for (let i = 0; i < navbar.length; i++) {
    if (path.indexOf(navbar[i].path) === 0) {
      return navbar[i].name
    }

    if (navbar[i].children && navbar[i].children.length) {
      let name = getNavName(path, navbar[i].children)
      if (name) {
        return name
      }
    }
  }
}

// function getMenuItemByPath (path, menuItem) {
//   if (!menuItem) {
//     return null
//   }

//   let stack

//   if (Array.isArray(menuItem)) {
//     stack = menuItem.slice(0)
//   } else {
//     stack = [menuItem]
//   }

//   while (stack.length) {
//     let item = stack.shift()
//     if (item.path === path) {
//       return item
//     }

//     if (path.indexOf(item.path) === 0 && item.children && item.children.length) {
//       stack = stack.concat(item.children)
//     }
//   }

//   return null
// }

// function getBreadcrumbs (targetPath, allMenus) {
//   let menu = allMenus
//   let paths = targetPath.split('/')
//   let breadcrumbs = []

//   for (let i = 0; i < paths.length; i++) {
//     let path = paths.slice(0, i + 1).join('/')
//     let menuItem = getMenuItemByPath(path, menu)

//     if (!menuItem) {
//       return null
//     }

//     menu = menuItem
//     breadcrumbs.push((menuItem.info && menuItem.info.name) || menuItem.name)
//   }

//   return breadcrumbs
// }

function getPre (current, menu) {
  try {
    let parent = getParent(current, menu)
    if (!parent) {
      return null
    }
    let index = getIndex(current, parent.children || parent)
    if (index > 0) {
      let pre = (parent.children || parent)[index - 1]
      while (pre.children) {
        pre = pre.children[pre.children.length - 1]
      }
      return pre
    }
    while (parent) {
      let currParent = getParent(parent.path, menu)
      if (!currParent) {
        break
      }
      let index = getIndex(parent.path, currParent.children || currParent)
      if (index > 0) {
        let pre = (currParent.children || currParent)[index - 1]
        while (pre.children) {
          pre = pre.children[pre.children.length - 1]
        }
        return pre
      }
      parent = currParent
    }
    return null
  } catch (e) {
    console.log('===== get pre error =====')
    console.log(path)
    console.log(e)
    console.log('-------------------------')
  }
}

function getNext (current, menu) {
  try {
    let parent = getParent(current, menu)
    if (!parent) {
      return null
    }
    let index = getIndex(current, parent.children || parent)
    let list = parent.children || parent
    if (index < (list.length - 1)) {
      let next = list[index + 1]
      while (next.children) {
        next = next.children[0]
      }
      return next
    }
    while (parent) {
      let currParent = getParent(parent.path, menu)
      if (!currParent) {
        break
      }
      let list = currParent.children || currParent
      let index = getIndex(parent.path, list)
      if (index < (list.length - 1)) {
        let next = list[index + 1]
        while (next.children) {
          next = next.children[0]
        }
        return next
      }
      parent = currParent
    }
    return null
  } catch (e) {
    console.log('==== get next error =====')
    console.log(path)
    console.log(e)
    console.log('-------------------------')
  }
}

function getParent (path, menu) {
  let list
  if (Array.isArray(menu)) {
    list = menu
  } else if (menu.children) {
    list = menu.children
  }
  if (getItem(path, list)) {
    return menu
  }
  for (let i = 0, max = list.length; i < max; i++) {
    if (list[i].children) {
      let childParent = getParent(path, list[i])
      if (childParent) {
        return childParent
      }
    }
  }
  return null
}

function getItem (path, list) {
  for (let i = 0, max = list.length; i < max; i++) {
    if (list[i].path === path) {
      return list[i]
    }
  }
  return null
}

function getIndex (path, list) {
  for (let i = 0, max = list.length; i < max; i++) {
    if (list[i].path === path) {
      return i
    }
  }
  return -1
}

function getBreadcrumbs (path, menu) {
  return path.split('/').map((str, i, arr) => arr.slice(0, i + 1).join('/'))
    .reduce((obj, key) => {
      let menu = obj.menu

      let list
      if (Array.isArray(menu)) {
        list = menu
      } else if (menu.children) {
        list = menu.children
      }

      let item = getItem(key, list)

      if (item) {
        obj.list.push(item)
        obj.menu = item.children
      }

      return obj
    }, {list: [], menu: menu}).list
}
