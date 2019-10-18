/**
 * @file mip-img 图片大小做了一个简单的处理
 * @author eral (liuruoran@baidu.com)
 * @description 部分图片显示过大
 */

// 手机截图需要尺寸限制，需要将图片链接添加在此处，max-width: 400px
const processList400 = [
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/home-init.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/shell/use-shell.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/shell/transition-forward.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/shell/use-shell-2.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/shell/use-shell-3.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/shell/transition-forward-2.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/shell/transition-backward.png',
  'https://mip-project.github.io/assets/img/docs/codelabs/component-development/images/codelab-dev-preview.png',
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip2/page/bottom-shell-2.png',
  'https://mip-project.github.io/assets/img/docs/codelabs/global-data/images/city-selector.png'
]

// max-width: 800px
const processList800 = [
  'https://mip-doc.cdn.bcebos.com/mipengine-org/assets/mip/codelab/project.jpg'
]

/**
 * 处理文档中 mip-img 标签批量替换后，部分手机截图特别大的问题
 * 希望做处理的可以添加到上面的列表，max-width: 400px
 *
 * @param  {string} src    [图片链接]
 * @param  {number} width  [图片宽度]
 * @param  {number} height [图片高度]
 * @return {Object}        [description]
 */
function processMipImgStyle (src, width, height) {
  let layout = 'responsive'
  let addClass = ''

  if (width <= 320) {
    layout = 'fixed'
  } else if (processList400.includes(src)) {
    // common.style 中限制了图片的宽度为400px, 一般是针对手机截图做的处理
    addClass = 'mip-layout-responsive-width-400'
  } else if (processList800.includes(src)) {
    // common.style 中限制了图片的宽度为400px, 一般是针对手机截图做的处理
    addClass = 'mip-layout-responsive-width-800'
  }

  return {
    layout,
    addClass
  }
}

module.exports = {
  processMipImgStyle
}
