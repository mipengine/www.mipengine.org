title: MIP 组件列表
layout: doc
---

## 1. 内置组件

内置组件是包含在 `mip.js` 中的组件，可直接使用，无需另外引入 JS 脚本。

<span class="minw-125">内置组件</span>|<span class="minw-60">中文</span>|描述
----|----|----
[mip-carousel](/examples/mip/mip-carousel.html) | 多图轮播|mip-carousel 用来支持 MIP 中图片的一种展示方式，支持多图轮播。
[mip-iframe](/examples/mip/mip-iframe.html) | -|mip-iframe 是用来支持在 MIP 中嵌入第三方内容的一种方式，需要注意的是：所嵌入的内容强制是符合 HTTPS 协议的。
[mip-img](/examples/mip/mip-img.html) | 图片|mip-img 用来支持在 MIP 中增加图片内容。
[mip-pix](/examples/mip/mip-pix.html) | 统计|将 mip-pix 组件直接引入，可发送带有自定义参数的请求，用于统计页面访问情况。这些参数主要包括页面打开时间点、页面标题和当面页面地址。
[mip-video](/examples/mip/mip-video.html) | -|mip-video 用来支持在 MIP 中增加视频内容，是 HTML `<video>` 的直接包装。功能和兼容性与 HTML5 `<video>` 一致。

## 2. 个性化组件

个性化组件是满足于特定需求的组件，包括交互、统计等需求。需要引入对应的 JS 脚本。

<span class="minw-125">个性化组件</span>|<span class="minw-60">中文</span>|描述
----|----|----
[mip-access](/examples/mip-extensions/mip-access.html) |页面内容访问权限定制组件|mip-access 能够允许发布者对页面内容进行访问权限的控制，通过内容标记和用户访问情况进行综合评价，从而决定页面要展示的内容。
[mip-accordion](/examples/mip-extensions/mip-accordion.html) |折叠节点|折叠隐藏节点(可记录用户上次行为)。
[mip-analytics](/examples/mip-extensions/mip-analytics.html) |统计框架|提供统计发送接口，由使用方决定在什么时候发送什么参数，到什么地方。
[mip-anim](/examples/mip-extensions/mip-anim.html) |动图|用来支持在 MIP 页中 gif 图的使用。
[mip-app-banner](/examples/mip-extensions/mip-app-banner.html) |App 调起组件|用于调起 App 。
[mip-appdl](/examples/mip-extensions/mip-appdl.html) |App 下载|App 下载，可区分安卓和 iOS 。
[mip-audio](/examples/mip-extensions/mip-audio.html) |音频播放|提供了一个音频播放组件
[mip-bind](/examples/mip-extensions/mip-bind.html) |数据驱动组件|在页面中以数据作为驱动源，做到随着数据变动页面界面也会随之变动的功能。
[mip-experiment](/examples/mip-extensions/mip-experiment.html) |前端抽样实验|mip-experiment 组件用于前端抽样实验。可用于按钮，banner，广告等前端可控元素的改版实验，与 mip-pix 可配合使用。
[mip-filter](/examples/mip-extensions/mip-filter.html) |筛选组件|筛选组件，自适应 PC 端和移动端宽度。 [mipengine.org](https://www.mipengine.org/timeline.html)有引用
[mip-fixed](/examples/mip-extensions/mip-fixed.html) |悬浮布局|悬浮元素整体使用方案。
[mip-form](/examples/mip-extensions/mip-form.html) |表单|表单提交。
[mip-gototop](/examples/mip-extensions/mip-gototop.html) |快速回顶|添加快速回顶按钮，点击回到页面顶部。
[mip-history](/examples/mip-extensions/mip-history.html) |历史记录|封装了对历史记录的操作，实现页面间前进后退的功能。
[mip-html-os](/examples/mip-extensions/mip-html-os.html) |操作系统|元素区分操作系统显示内容，支持 Andriod 和 iOS。
[mip-infinitescroll](/examples/mip-extensions/mip-infinitescroll.html) |无限滚动|当用户滚动到页面底部时，加载更多。
[mip-install-serviceworker](/examples/mip-extensions/mip-install-serviceworker.html) |离线可用组件|service worker 组件可以根据不同策略进行不同资源缓存，使其能够在离线情况下可访问。
[mip-lightbox](/examples/mip-extensions/mip-lightbox.html) |弹出层|由用户控制展现或关闭的全屏浮层组件，组件全屏覆盖，组件里的元素超出屏幕会被隐藏，不能滑动。
[mip-link](/examples/mip-extensions/mip-link.html) |跳转链接|实现两个 MIP 页面之间互相跳转的功能。
[mip-list](/examples/mip-extensions/mip-list.html) |列表组件|可以渲染同步数据，或者异步请求数据后渲染。
[mip-map](/examples/mip-extensions/mip-map.html) |百度地图组件|组件集成了百度地图的服务，目前支持具体位置定位、地图控件加载、marker 定位点弹窗信息定制等功能。
[mip-nav-slidedown](/examples/mip-extensions/mip-nav-slidedown.html) |菜单|响应式菜单。
[mip-scrollbox](/examples/mip-extensions/mip-scrollbox.html) | 横向滑动组件 | 支持自动适合屏幕宽度、栅格化（12列和两端 `17px` 边距）等特性。
[mip-semi-fixed](/examples/mip-extensions/mip-semi-fixed.html) |滑动悬浮组件 |`position:sticky` 的 JS 兼容版本。页面元素滑动到顶部时自动贴顶。
[mip-share](/examples/mip-extensions/mip-share.html) |分享|提供页面内分享按钮功能，默认分享当前网址。
[mip-showmore](/examples/mip-extensions/mip-showmore.html) |显示更多|隐藏过长的文章，点击按钮显示更多内容。
[mip-sidebar](/examples/mip-extensions/mip-sidebar.html) |侧边栏|侧边栏组件，点击按钮，侧边栏滑入屏幕。
[mip-stats-baidu](/examples/mip-extensions/mip-stats-baidu.html) |百度统计|添加百度统计组件，用于统计页面数据。
[mip-stats-tianrun](/examples/mip-extensions/mip-stats-tianrun.html) |天润统计|添加天润统计。
[mip-vd-baidu](/examples/mip-extensions/mip-vd-baidu.html) | 百度视频组件 | HTTP 视频源播放的百度解决方案。
[mip-vd-tabs](/examples/mip-extensions/mip-vd-tabs.html) |tab 切换组件|在网页中显示标签。标签页内元素较多时不建议使用，会影响页面性能。
[mip-story](/examples/mip-extensions/mip-story.html) |小故事组件|引入更好质量和多元化的内容的功能组件。

## 3. 广告组件

广告组件主要满足各类广告的投放，需要引入对应的 JS 脚本。阅读[广告文档](/examples/mip-ad/mip-ad.html)来确定 MIP 广告类型。

<span class="minw-125">广告组件</span>|<span class="minw-60">中文</span>|描述
----|----|----
[mip-ad](/examples/mip-ad/mip-ad.html) | 广告|mip-ad 用于在MIP页中引入广告脚本，投放广告。
[mip-ad-comm](/examples/mip-ad/mip-ad-comm.html) | 通用广告|mip-ad 的一种类型：通用广告。
[mip-ad-baidu](/examples/mip-ad/mip-ad-baidu.html) | 百度网盟推广合作|mip-ad 的一种类型：百度网盟推广合作。  产品介绍：http://union.baidu.com/product/prod-cpro.html
[mip-ad-baidussp](/examples/mip-ad/mip-ad-baidussp.html) | 百度ssp直投广告|mip-ad 的一种类型：百度ssp直投广告。  产品介绍：http://yingxiao.baidu.com/zhichi/knowledge/detail.action?channelId=24&classId=14547&knowledgeId=14745
[mip-ad-imageplus](/examples/mip-ad/mip-ad-imageplus.html) | 百度图+广告|mip-ad 的一种类型: 百度图+广告。   产品介绍：http://imageplus.baidu.com/
[mip-ad-qwang](/examples/mip-ad/mip-ad-qwang.html) | 百度搜索推广合作|mip-ad 的一种类型：百度搜索推广合作。  产品介绍：http://union.baidu.com/product/prod-search.html
[mip-ad-ssp](/examples/mip-ad/mip-ad-ssp.html) | 百度Feeds联盟广告|mip-ad 的一种类型：百度Feeds联盟广告。  在 https://ssp.baidu.com/ 后台选择资源管理/feeds联盟接入。
[mip-baidu-wm-ext](/examples/mip-ad/mip-baidu-wm-ext.html) | 百度联盟广告反屏蔽|mip-ad 的一种类型：百度联盟广告反屏蔽。  产品介绍：http://yingxiao.baidu.com/zhichi/knowledge/detail.action?channelId=4&classId=13484&knowledgeId=15198
