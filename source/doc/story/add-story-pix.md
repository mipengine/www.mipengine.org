title: 创建小故事-小故事添加统计
layout: doc
---

## 小故事添加统计

## 知识储备

在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)和[创建小故事的封底页面](https://www.mipengine.org/doc/story/create6.html)了解基础信息；

## 添加统计

​	在完成一个小故事的开发以后，有时候我们需要对整个小故事的用户行为进行监控，因此需要使用统计组件，来进行统计，我们这里提供了两个组件便于用户使用。

- PV 使用 mip-pix 组件统计

  `mip-pix`组件本身在页面不可见，但本元素只有滚动到屏幕可见范围内才触发初始化;

  - 示例

    ```html
    <mip-pix src="https://www.mipengine.org/a.gif"></mip-pix>
    ```

  详细的使用介绍可点击查看[mip-pix 组件](https://www.mipengine.org/examples/mip/mip-pix.html)

- 交互行为日志使用 [mip-stats-baidu 组件统计](https://github.com/mipengine/mip-extensions/tree/master/src/mip-stats-baidu)

  - 示例

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

完成了统计添加，我们已经完成了一个小故事的整个开发，但是鉴于小故事是属于特殊的MIP页，因此小故事也要经过MIP页面校验，只有符合MIP页面规范的小故事才可以最终在搜索结果页展现。


## 小故事开发教程系列

[第一篇、开发小故事前期准备](https://www.mipengine.org/doc/story/add-stroy-before.html)

[第二篇、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[第三篇、创建小故事的封面](https://www.mipengine.org/doc/story/add-stroy-cover.html)

[第四篇、开发更丰富的小故事段落](https://www.mipengine.org/doc/story/add-story-section.html)

[第五篇、小故事内置动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[第六篇、创建小故事的封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[第七篇、小故事的添加统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[第八篇、小故事的MIP规范校验](https://www.mipengine.org/doc/story/add-stroy-validate.html)


