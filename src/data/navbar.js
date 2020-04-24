/**
 * @file navbar.js
 * @author clark-t (clarktanglei@163.com)
 */

module.exports = () => [
  {
    "name": "首页",
    "path": "docs/index",
    // "url": "/index.html",
    "activeUrl": /^\/(index\.html|v2|v2\/|v2\/index\.html)?((\?|\#).*)?$/
  },
  {
    "name": "关于 MIP",
    "activeUrl": /^\/(v2\/)?about/,
    "children": [
      {
        "name": "什么是 MIP",
        "path": "docs/about/what-is-mip.md"
      },
      {
        "name": "MIP 是如何运作的",
        "path": "docs/about/how-mip-works.md"
      },
      {
        "name": "MIP 使用场景",
        "path": "docs/about/who-uses-mip.md"
      },
      {
        "name": "MIP 内容声明",
        "path": "docs/about/announcement.md"
      }
    ]
  },
  {
    "name": "学习",
    "activeUrl": /^\/(v2\/)?(docs|codelabs)(.*)((\?|\#).*)?$/,
    "children": [
      {
        "name": "MIP 教程",
        "path": "docs/docs/getting-start/newbie.md",
        "activeUrl": /^\/(v2\/)?docs/
      },
      {
        "name": "MIP 改造规范",
        "path": "docs/docs/mip-standard/mip-html-spec.md",
        "activeUrl": /^\/(v2\/)?docs/
      },
      {
        "name": "提升 MIP 交互性",
        "path": "docs/docs/interactive-mip/introduction.md",
        "activeUrl": /^\/(v2\/)?docs/
      },
      {
        "name": "MIP 缓存说明",
        "path": "docs/docs/mip-standard/mip-cache-spec.md",
        "activeUrl": /^\/(v2\/)?docs/
      },
      {
        "name": "Codelab",
        "path": "docs/codelabs",
        "activeUrl": /^\/(v2\/)?codelabs/
      },
      // {
      //   "name": "MIP 视频课程",
      //   "url": "https://bit.baidu.com/course/datalist/column/120.html",
      //   "blank": true
      // },
      {
        "name": "常见问题",
        "url": "https://github.com/mipengine/mip/wiki/MIP-%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E5%A4%A7%E5%85%A8",
        "blank": true
      }
      // ,
      // {
      //   "name": "UI",
      //   "path": "docs/ui/components/mip-v-alert.md",
      //   // "url": "/codelabs/index.html",
      //   "width": 60
      // }
    ]
  },
  {
    "name": "组件",
    "activeUrl": /^\/(v2\/)?(components|contribute|api)/,
    "children": [
      {
        "name": "组件列表",
        "path": "docs/components",
        "activeUrl": /^\/(v2\/)?components/
      },
      {
        "name": "提交站长组件代码",
        "path": "docs/contribute/getting-start/how-to-contribute.md",
        "activeUrl": /^\/(v2\/)?contribute/
      },
      {
        "name": "贡献官方组件代码",
        "path": "docs/contribute/getting-start/how-to-contribute-mip-extensions.md",
        "activeUrl": /^\/(v2\/)?contribute/
      },
      {
        "name": "MIP API",
        "path": "docs/api",
        "activeUrl": /^\/(v2\/)?api/
      }
    ]
  },
  // {
  //   "name": "帮助",
  //   "url": "/help",
  //   "width": 32
  // },
  {
    "name": "工具",
    "children": [
      // {
      //   "name": "MIP 官方博客",
      //   "url": "http://www.cnblogs.com/mipengine",
      //   "blank": true
      // },
      // {
      //   "name": "MIP-CLI 本地开发工具",
      //   "url": "https://github.com/mipengine/mip2/tree/master/packages/mip-cli",
      //   "blank": true
      // },
      {
        "name": "MIP 代码校验工具",
        "url": "https://www.mipengine.org/validator/validate",
        "blank": true
      },
      {
        "name": "MIP 效果预览工具",
        "url": "https://www.mipengine.org/validator/preview",
        "blank": true
      },
      {
        "name": "MIP PATH 转换工具",
        "url": "https://www.mipengine.org/mippath.html",
        "blank": true
      },
    //   {
    //     "name": "MIP 组件审核平台",
    //     "url": "https://www.mipengine.org/platform/mip",
    //     "blank": true
    //   }
    ]
  },
  {
    "name": "GitHub",
    "url": "https://github.com/mipengine/mip2",
    "blank": true
  },
  {
    "name": "最新动态",
    // "path": "docs/news/index.md",
    "activeUrl": /^\/(v2\/)?news/,
    "children": [
      {
        "name": "通知",
        "path": "docs/news/index.md"
      }
    ]
  }
  // ,
  // {
  //   "name": "回到旧版",
  //   "url": "https://www.mipengine.org/v1.html",
  //   "blank": true
  // }
]
/* eslint-enable */
