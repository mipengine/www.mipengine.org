
title: 创建小故事-小故事的组织结构
layout: doc
---

## 小故事的组织结构

​	本篇主要讲解小故事的结构划分和代码结构；

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)了解基础信息；


## 小故事的组织结构介绍

​	小故事主要由 [mip-story 组件](/examples/mip-extensions/mip-story.html) 承载，充当小故事中所有段落的容器，按照段落个数自动生成段落导航，返回链接，段落播放完的重播和分享功能。

小故事具有三个基本概念：段落（view），层（layer）和元素（element）.

- 每个小故事可以包含多个段落（view），每个段落充满屏幕。用户操作翻页后，会看到下一个段落。
- 每个段落又可以包含多个层（layer），单个层可以设置布局模式，如多行布局，左右布局，图片拉伸布局等。
- 元素（element）是资源素材，如背景图，主标题，详细描述等。在 `<h1>`、`<p>`、`<mip-img>` 等标签中声明。

![intro-view-layer-element (1)](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/intro-view-layer-element.jpg)

​	这里的每一个组件都是一个mip组件，其中故事组件为`mip-story`，段落为`mip-story-view`，层为`mip-story-layer`，元素为资源素材，如背景图，主标题，详细描述等。在 `<h1>`、`<p>`、`<mip-img>` 等标签中声明。

![mip-story-tag-hierarchy](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/demo-story1.png)

## 开发小故事

开发一个小故事，只需要简单的三部：

1. 创建封面以及段落；
2. 为段落添加丰富内容；
3. 为小故事添加封底；

下面请跟随详细步骤教程开始制作你的第一个小故事吧！

​	小故事由`mip-story`组件表示，它作为故事中所有页面的容器。该`mip-story`组件还负责创建UI外壳，包括处理手势和导航。

​	`mip-story`组件是一个自定义的MIP组件，与所有自定义组件一样，您必须要将该组件的关联脚本添加到MIP文档；在一个标准的 [MIP HTML 页面](https://www.mipengine.org/doc/01-mip-demo.html)的`<script>`标签中添加依赖脚本：

```html
<!DOCTYPE html>
<html mip>
<head>
    ....
</head>
<body>
    <!-- MIP 运行环境 -->
    <script src="https://c.mipcdn.com/static/v1/mip.js"></script>
    <!-- 小故事依赖脚本 -->
    <script src="https://c.mipcdn.com/static/v1/mip-share/mip-share.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-story/mip-story.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-stats-baidu/mip-stats-baidu.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-scrollbox/mip-scrollbox.js"></script>
</body>
</html>
```

​	添加好依赖后，需要把`mip-story`元素添加到`<body>`文档中，如下所示：

```html
<!DOCTYPE html>
<html mip>
<head>
    ....
</head>
<body>
    <!-- 组件使用 -->
    <mip-story id="story-demo">
       ...
    </mip-story>
    <!-- MIP 运行环境 -->
    <script src="https://c.mipcdn.com/static/v1/mip.js"></script>
    <!-- 小故事依赖脚本 -->
    <script src="https://c.mipcdn.com/static/v1/mip-share/mip-share.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-story/mip-story.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-stats-baidu/mip-stats-baidu.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-scrollbox/mip-scrollbox.js"></script>
</body>
</html>
```

​	在此需要重点注意的是，要想获得有效的MIP故事，在`<body>`元素中必须只有一个`<mip-story>`组件，所有其他元素（除`<script>`中添加的依赖）都要包含在`<mip-story>`组件中。

​	在完成以上工作，我们拥有了一个小故事的外壳，接下来让我们创建小故事的内容。


## 小故事开发教程系列

[第一篇、开发小故事前期准备](https://www.mipengine.org/doc/story/add-stroy-before.html)

[第二篇、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[第三篇、创建小故事的封面](https://www.mipengine.org/doc/story/add-stroy-cover.html)

[第四篇、开发更丰富的小故事段落](https://www.mipengine.org/doc/story/add-story-section.html)

[第五篇、小故事内置动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[第六篇、创建小故事的封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[第七篇、小故事的添加统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[第八篇、小故事的MIP规范校验](https://www.mipengine.org/doc/story/add-stroy-validate.html)


