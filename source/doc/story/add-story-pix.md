title: 为小故事添加页面统计
layout: examples
---

## 知识储备

​​&emsp;&emsp;在阅读本篇前，您需要了解什么是小故事，可以查看[开发小故事前期准备](/doc/story/add-story-before.html)、[小故事的组织结构](/doc/story/story-organization-structure.html)、[创建小故事的封面](/doc/story/add-story-cover.html)和[创建小故事的封底页面](/doc/story/add-story-end.html)了解基础信息；

## 添加统计

​​​&emsp;&emsp;完成了一个小故事开发之后，在正式对外发布之前，可能需要对整个小故事页面添加一些统计埋点，以便后期获取到访问小故事页面的用户行为。在这里我们需要引入统计组件来进行统计。

### 统计页面访问PV

​​&emsp;&emsp;使用 `mip-pix`组件来统计页面访问PV；`mip-pix`组件本身在页面不可见，但本元素只有滚动到屏幕可见范围内才触发初始化;

- 示例

```html
<mip-pix src="https://www.mipengine.org/a.gif"></mip-pix>
```

​​&emsp;&emsp;可以点击[mip-pix 组件](/examples/mip/mip-pix.html)了解更多使用信息。

### 统计用户的交互行为

​​&emsp;&emsp;使用 `mip-stats-baidu` 组件统计用户的交互行为

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

​​&emsp;&emsp;可以点击[ `mip-stats-baidu` 组件](/examples/mip-extensions/mip-stats-baidu.html)介绍了解更多使用信息。完成统计添加，现在可以把您的小故事页面发布到的服务器上让大家浏览了。如果您希望您的小故事页面可以被提交到搜索并被搜索缓存，就必须要通过代码规范校验。

上一节：[为小故事添加封底页面](/doc/story/add-story-end.html)

下一节：[对小故事进行页面代码规范校验](/doc/story/add-story-validate.html)


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

