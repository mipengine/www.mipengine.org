title: 为小故事添加页面统计
layout: examples
---

## 知识储备

在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)和[创建小故事的封底页面](https://www.mipengine.org/doc/story/create6.html)了解基础信息；

## 添加统计

​	完成了一个小故事开发之后，在正式对外发布之前，我们需要对整个小故事页面添加一些统计埋点，以便我们可以获取到访问小故事页面的用户行为。在这里我们需要引入统计组件来进行统计。

### 统计页面访问PV

我们可以使用 `mip-pix`组件来统计页面访问PV；

`mip-pix`组件本身在页面不可见，但本元素只有滚动到屏幕可见范围内才触发初始化;

- 示例

```html
<mip-pix src="https://www.mipengine.org/a.gif"></mip-pix>
```

可以点击[mip-pix 组件](https://www.mipengine.org/examples/mip/mip-pix.html)了解更多使用信息。

### 统计用户的交互行为

- 使用 `mip-stats-baidu` 组件统计用户的交互行为

```html
<mip-stats-baidu>
    <script type="application/json">
        {
            "token": "02890d4a309827eb62bc3335b2b28f7f",
            "_setCustomVar": [1, "login", "1", 2],
            "_setAutoPageview": [true]
        }
    </script>
</mip-stats-baidu>
```

可以点击[ `mip-stats-baidu` 组件](https://www.mipengine.org/examples/mip-extensions/mip-stats-baidu.html)介绍了解更多使用信息。

完成了统计添加，我们已经完成了一个小故事的整个开发。你可以把你的小故事页面放到你的服务器上让大家浏览了。

接下来，如果你希望你的小故事页面可以被提交到搜索并被搜索缓存，那么你需要完成[小故事页面的代码规范校验](https://www.mipengine.org/doc/story/add-stroy-validate.html)。


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