/**
 * @file highlight quote
 * @author tanglei (tanglei02@baidu.com)
 * @description 给 markdown 的 blockquote 增加增强语法
 */

/**
 * 当满足如下语法时，blockquote 会显示不同的颜色
 * ```markdown
 *
 * info 左侧 border 会显示蓝色：
 *
 * > info
 * >
 * > 内容内容
 *
 *
 * error 左侧 border 会显示红色：
 *
 * > error
 * >
 * > 内容内容
 *
 * warn 左侧 border 会显示橙色：
 *
 * > warn
 * >
 * > 内容内容
 *
 * ```
 */

module.exports = class HighlightQuote {
  apply (on, app) {
    on(app.STAGES.RENDER_BLOCKQUOTE, (html, {args}) => {
      let quote = args[0]
      let [one, ...quotes] = quote.split(/<p>({=(.*?)=}|info|error|warn)<\/p>/mg)

      return '' +
        (one ? tag('blockquote', one) : '') +
        chunk(quotes, 3)
          .map(([className, props, content]) => {
            props = props !== undefined ? decodeQuote(props) : `class="${className}"`
            return tag('blockquote', content, props)
          })
          .join('')
    })
  }
}

function chunk (arr, size) {
  let output = []
  for (let i = 0, max = arr.length; i < max; i += size) {
    output.push(arr.slice(i, i + size))
  }

  return output
}

function decodeQuote (str) {
  return str.replace(/&quot;/mg, '"').replace(/&apos;/mg, '\'')
}

function tag (tag, content = '', props = '') {
  return `<${tag} ${props}>${content}</${tag}>`
}
