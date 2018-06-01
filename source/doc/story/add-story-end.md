title: 为小故事添加封底页面
layout: examples
---


## 知识储备

​​&emsp;&emsp;在阅读本篇前，您需要了解什么是小故事，可以查看[开发小故事前期准备](/doc/story/add-story-before.html)、[小故事的组织结构](/doc/story/story-organization-structure.html)、[创建小故事的封面](/doc/story/add-story-cover.html)了解基础信息；

## 为小故事添加封底页面

​​​&emsp;&emsp;一个完整的故事需要有一个美好的结局，小故事页面也是一样。我们添加完内容页面之后，在结尾需要设置一个合适的结尾封底页面；

​​​&emsp;&emsp;这个页面我们采用数据配置的方式去完成；

​​​&emsp;&emsp;如下面的代码格式所示，在`<mip-story>`标签下添加一个`<script type="application/json"></script>`来进行这些配置；

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

配置完以上信息，您的封底页面就已经初步完成了；

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/share.png" width="276" height="494" />
</div>

### recommend

​​​&emsp;&emsp;如果您希望用户在阅读完当前的小故事之后，可以看到更多推荐的内容，我们提供了`recommend`字段可继续配置推荐内容的数据。

```html
<mip-story>
    <script type="application/json">
    {
        "share": {
            "thumbnail": "img/share.jpg",
            "background": "img/sharebg.png",
            "title": "相约一起看樱花",
            "desc": "带您了解世界著名的赏樱圣地",
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

- 示例

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/share.jpeg" width="276" height="494" />
</div>


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

​​​&emsp;&emsp;完成以上步骤，一个完整的小故事已经开发完成。如果您还关心页面统计的问题，我们也提供了统计组件。接下介绍如果添加页面统计。

上一节：[为小故事添加背景音乐](/doc/story/add-story-music.html)

下一节：[为小故事添加页面统计](/doc/story/add-story-pix.html)


## 小故事开发系列教程

[一、开发小故事前期准备](/doc/story/add-story-before.html)

[二、小故事的组织结构](/doc/story/story-organization-structure.html)

[三、为小故事创建一个封面](/doc/story/add-story-cover.html)

[四、为小故事添加更多的内容段落](/doc/story/add-story-section.html)

[五、为小故事段落中的元素添加交互动画](/doc/story/add-story-animation.html)

[六、为小故事添加背景音乐](/doc/story/add-story-music.html)

[七、为小故事添加封底页面](/doc/story/add-story-end.html)

[八、为小故事添加页面统计](/doc/story/add-story-pix.html)

[九、对小故事进行页面代码规范校验](/doc/story/add-story-validate.html)

