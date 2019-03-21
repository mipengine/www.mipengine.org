/**
 * @file basic util
 * @author tanglei (tanglei02@baidu.com)
 */

function firstNode (tree, children = 'children') {
  if (!tree[0]) {
    return
  }

  if (tree[0][children]) {
    return firstNode(tree[0][children], children)
  }

  return tree[0]
}

module.exports = {
  startWith (str, start) {
    return str.slice(0, start.length) === start
  },

  isValidArray (arr) {
    return Array.isArray(arr) && !!(arr.length)
  },

  firstNode: firstNode
}
