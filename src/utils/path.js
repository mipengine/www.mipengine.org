/**
 * @file 路径相关常用方法封装
 * @author tanglei (tanglei02@baidu.com)
 */
const path = require('path')

function delimiter (str) {
  return str.replace(/\\/g, '/').replace(/\/$/, '')
}

function join (...arr) {
  return delimiter(path.join(...arr))
}

module.exports = {
  delimiter,
  join
}
