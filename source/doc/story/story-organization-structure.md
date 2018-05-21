title: 小故事的组织结构
layout: examples
---

## 小故事的组织结构

​	本篇主要讲解小故事的结构划分和代码结构；

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)了解基础信息；


## 小故事的组织结构介绍

​	小故事主要由 [mip-story 组件](/examples/mip-extensions/mip-story.html) 承载，充当小故事中所有段落的容器，按照段落个数自动生成段落导航，段落播放完的重播和分享功能。

小故事具有三个基本概念：段落（view），层（layer）和元素（element）.

- 每个小故事可以包含多个段落（view），每个段落充满屏幕。用户操作翻页后，会看到下一个段落。
- 每个段落又可以包含多个层（layer），单个层可以设置布局模式，如多行布局，左右布局，图片拉伸布局等。
- 元素（element）是资源素材，如背景图，主标题，详细描述等。在 `<h1>`、`<p>`、`<mip-img>` 等标签中声明。

![intro-view-layer-element (1)](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/intro-view-layer-element.jpg)

​	这里的每一个元素都是一个mip组件，其中故事组件 为`mip-story`，段落为`mip-story-view`，层为`mip-story-layer`，元素为资源素材，如背景图，主标题，详细描述等。在 `<h1>`、`<p>`、`<mip-img>` 等标签中声明。



![mip-story-tag-hierarchy](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/demo-story1.png)

## 开发小故事

开发一个小故事，只需要简单的三部：

1. 创建封面以及段落；
2. 为段落添加丰富内容；
3. 为小故事添加封底；

下面请跟随详细步骤教程开始制作你的第一个小故事吧！

### 在页面中添加mip-story 组件标签；

​	`mip-story` 是一个自定义的MIP组件，与使用其他mip组件一样，您必须要将该组件的关联脚本添加到html页面中；在一个标准的 [MIP HTML 页面](https://www.mipengine.org/doc/01-mip-demo.html)的`<script>`标签中添加依赖脚本：

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

这样，我们就完了小故事开发的第一步工作——在页面中添加mip-story标签，接下来让我们添加小故事里的内容。


## 小故事开发教程系列

[一、开发小故事前期准备](https://www.mipengine.org/doc/story/add-story-before.html)

[二、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[三、为小故事创建一个封面](https://www.mipengine.org/doc/story/add-story-cover.html)

[四、为小故事添加更多的内容段落](https://www.mipengine.org/doc/story/add-story-section.html)

[五、为小故事段落中的元素添加交互动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[六、为小故事添加背景音乐](https://www.mipengine.org/doc/story/add-story-music.html)

[七、为小故事添加封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[八、为小故事添加页面统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[九、对小故事进行页面代码规范校验](https://www.mipengine.org/doc/story/add-story-validate.html)