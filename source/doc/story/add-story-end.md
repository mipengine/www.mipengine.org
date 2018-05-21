title: 创建小故事-小故事封面页面
layout: doc
---

## 小故事封面页面

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；


## 小故事分享页面的介绍

​	到目前，您已经添加了所有的页面，那么当我们需要对一个小故事进行分享的时候，我们则需要创建一个分享页面。

​	在分享页中，在 `<mip-story>` 段落最后提供了专门用于展示分享及小故事更多相关信息的页面。当用户在最后一个段落继续向后点击时候，即会出现。其中该页面内容需要通过开发者进行配置，具体使用范式和配置参数如下：



```html
<mip-story>
    <script type="application/json">
    {
         "share": {
                "thumbnail": "https://www.mipengine.org/static/img/mip-story/cover.jpg",
                "background": "https://www.mipengine.org/static/img/mip-story/p8.png",
                "title": "第90届奥斯卡颁奖典礼回顾",
                "from": "小故事",
                "desc": "一分钟带你了解第九十届奥斯卡颁奖典礼",
                "readings": "10000"
            }
     }
	</script>
    <mip-story-view>
        <mip-story-layer template="fill">
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

如图所示：

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/share.png" width="276" height="494" />


除了share字段，我们还提供了别的字段，以丰富小故事的分享页面，具体使用方式如下：

```html
<mip-story>
    <script type="application/json">
    {
        "share": {
            "thumbnail": "img/share.jpg",
            "background": "img/sharebg.png",
            "title": "相约一起看樱花",
            "from": " "
        },
        "recommend": {
        "url": "",
        "items": [
            {
                "cover": "https://img6.bdstatic.com/img/image/public/ribenshangying3.jpg",
                "url": "http://shxingtuan.com/jp_sakura/index.html",
                "title": "日本赏樱推荐",
                "from": " ",
                "fromUrl": " "
            },
            {
                "cover": "https://img6.bdstatic.com/img/image/public/shangyingmeitu.jpg",
                "url": "https://m.baidu.com/sf/vsearch?pd=image_content&word=%E8%B5%8F%E6%A8%B1&tn=vsearch&sa=vs_tab&lid=9813145669733695291&ms=1&atn=page&fr=tab&ssid=2e3d6e69757a696e616e6e616ece0f",
                "title": "往年樱花美图欣赏",
                "from": " ",
                "fromUrl": " "
            }
        ]
        }
     }
	</script>
    <mip-story-view>
        <mip-story-layer template="fill">
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

- share: share 字段下包含的是分享相关的数据。
- share.thumbnail: 预览小故事的缩略图地址。
- share.background: 结尾页背景图片地址。
- share.title: 小故事标题。
- share.from: 资源的来源信息。
- recommend: 小故事推荐相关的信息。
- recommend.items: 推荐小故事列表，它是一个数组，包含了所有推荐的小故事数据。
  - cover: 推荐的小故事背景图片。
  - url: 推荐的小故事跳转地址。
  - title: 推荐的小故事标题。
  - from: 推荐的小故事来源信息。
  - fromUrl: 推荐的小故事来源跳转地址。

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/share.jpeg" width="276" height="494" />

在完成以上步骤，我们的小故事已经基本开发完成，但是在发布之前，我们需要对其进行添加统计。


## 小故事开发教程系列

[第一篇、开发小故事前期准备](https://www.mipengine.org/doc/story/add-stroy-before.html)

[第二篇、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[第三篇、创建小故事的封面](https://www.mipengine.org/doc/story/add-stroy-cover.html)

[第四篇、开发更丰富的小故事段落](https://www.mipengine.org/doc/story/add-story-section.html)

[第五篇、小故事内置动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[第六篇、创建小故事的封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[第七篇、小故事的添加统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[第八篇、小故事的MIP规范校验](https://www.mipengine.org/doc/story/add-stroy-validate.html)


