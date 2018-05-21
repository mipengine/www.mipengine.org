title: 为小故事添加封底页面
layout: examples
---


## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；


## 为小故事添加封底页面

​	一个完整的故事需要有一个美好的结局，小故事页面也是一样。我们添加完内容页面之后，在结尾需要设置一个合适的结尾封底页面；

​	这个页面我们采用数据配置的方式去完成；

​	如下面的代码格式所示，在`<mip-story>`标签下添加一个`<script type="application/json"></script>`来进行这些配置；

### share

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

配置完以上信息，这个时候，你的封底页面就已经初步完成了；

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/share.png" width="276" height="494" />

### recommend
接下来，我们继续配置一些推荐的内容。
你可能希望用户在阅读完你的小故事之后，能够看到一些其他的推荐内容。

那么在上面的配置项中新增`recommend` 字段可以满足你的需求。

```html
<mip-story>
    <script type="application/json">
    {
        "share": {
            "thumbnail": "img/share.jpg",
            "background": "img/sharebg.png",
            "title": "相约一起看樱花",
            "desc": "带你了解世界著名的赏樱圣地",
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

完成上述内容之后，你会看到你的封底页面变成了这样。

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/share.jpeg" width="276" height="494" />

### 配置信息详解

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

  ​

完成以上步骤，那么你的一个小故事页面就已经开发完成了。但是正式对外发布之前，你可能会关心页面统计的事情，这点我们会在[为小故事添加统计](https://www.mipengine.org/doc/story/add-story-pix.html)中进行介绍；


## 小故事开发系列教程

[一、开发小故事前期准备](https://www.mipengine.org/doc/story/add-story-before.html)

[二、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[三、为小故事创建一个封面](https://www.mipengine.org/doc/story/add-story-cover.html)

[四、为小故事添加更多的内容段落](https://www.mipengine.org/doc/story/add-story-section.html)

[五、为小故事段落中的元素添加交互动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[六、为小故事添加背景音乐](https://www.mipengine.org/doc/story/add-story-music.html)

[七、为小故事添加封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[八、为小故事添加页面统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[九、对小故事进行页面代码规范校验](https://www.mipengine.org/doc/story/add-story-validate.html)