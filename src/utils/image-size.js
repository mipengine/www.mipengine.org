/**
 * @file get image size in node
 * @author clark-t (clarktanglei@baidu.com)
 */

const sizeOf = require('image-size')
const url = require('url')
const https = require('https')
const http = require('http')
const fs = require('fs-extra')

const defaultSize = {width: 320, height: 320}

async function getLocalImageSize (src, logger = console) {
  if (await fs.exists(src)) {
    try {
      return sizeOf(src)
    } catch (e) {
      logger.warn('Error when read local image size: ' + src)
      logger.warn(e)
    }
  } else {
    logger.warn('Error when read local image size: (' + src + ') is not exists')
  }

  return defaultSize
}

async function getRemoteImageSize (src, logger = console) {
  let options = url.parse(src)
  let fn

  if (options.protocol === 'https:') {
    fn = https
  } else {
    fn = http
  }

  return new Promise(resolve => {
    fn.get(options, res => {
        let chunks = []

        res.on('data', chunk => {
            chunks.push(chunk)
          })
          .on('end', () => {
            if (chunks.length) {
              try {
                let size = sizeOf(Buffer.concat(chunks))
                return resolve(size)
              } catch (e) {
                logger.warn('Error when read remote image size: ' + src)
                logger.warn(e)
              }
            }

            resolve(defaultSize)
          })
          .setTimeout(3000, () => {
            resolve(defaultSize)
          })
      })
      .on('error', e => {
        console.error(src)
        // console.error(e)
        resolve(defaultSize)
      })
  })
}

module.exports = {
  getLocalImageSize,
  getRemoteImageSize
}
