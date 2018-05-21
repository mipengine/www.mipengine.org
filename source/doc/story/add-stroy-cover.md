title: 创建小故事-小故事的封面的开发
layout: doc
---

## 小故事的封面的开发

​	本篇主要提讲解如何创建一个小故事的封面；

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)了解基础信息；

## 小故事的封面的开发介绍

###1、在`mip-story`中添加一个封面

​	MIP小故事中的页面由`<mip-story-view>`组件表示。在一个`<mip-story>`，你可以有一个或多个`<mip-story-view>`组件，包含故事的每个单独的屏幕。您在开发一个小故事时候，第一页是显示在故事的第一页。要创建该页面，请将`<mip-story-view>`组件**添加**到`<mip-story>`。为页面**分配**一个唯一的ID。对于封面，分配唯一的ID `cover`：

```html
<mip-story id="story-demo">
    <mip-story-view>
        ...
    </mip-story-view>
</mip-story>
```

​	现在我们有了我们封面的外壳。但是，我们的故事仍然无效。在我们的页面中，我们需要指定至少一个**图层**。

### 2、在封面中添加一个图层

​	像下图中的图层一样，您可以在MIP故事页面中使用图层来创建视觉效果。层层叠在一起，因此，第一层是底层，下一层在顶层，依此类推。

我们的封面实际上由两层组成：

- **第1层**：用作背景的图像
	 **第2层**：故事的标题和副标题	

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/story-layer.png" width="350" height="494" />

##### 2.1 创建第一层

​	我们将第一层添加到封面上。该图层包含填充屏幕的图像。

​	通过将`<mip-story-view>`元素添加为子元素来创建图层`<mip-story-layer>`。由于是封面，我们希望图像填充屏幕，可以设置`<mip-story-layer>`中的`template`属性为`fill`，指定该`template="fill"`。在图层内部，`<mip-img>`为`cover.jpg`文件添加一个元素，并确保它对`layout="responsive"`图像尺寸为720 x 1280像素的响应（即）。以下是我们的图层：

```html
<mip-story>
    <mip-story-view>
        <mip-story-layer template="fill">
            <mip-img src="cover.jpg"></mip-img>
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

​	通过以上代码，可以实现封面的显示，它的图形化界面如下：


<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-0.png" width="276" height="494" />

##### 2.2 创建第二层

​	在完成第一层的情况下，我们开始完成第二层，它在背景之上，包含主标题和副标题。要添加第二层，首先需要完成与第一层相同的任务，但是此处的`template`不使用`fill`模板，此处我们使用`vertical`模板。

​	大家肯定会对`template`属性很迷惑，这个属性到底是干啥的，都有什么取值，为什么封面需要使用`fill`模板，那么接下来，我们了解下`template`属性的简单用法；`template`属性是`<mip-story-layer>`组件的一个属性，用来设置该层的整体布局结构；

- `template`属性

  - `template="fill"`：填充布局，该布局方式会将当前 `<mip-story-layer>` 中的第一个元素进行填充布局，其他元素均隐藏。适合于将图片、视频作为背景展示的场景。如图：

    ```html
    <mip-story-layer template="fill">
        <mip-img src="cover.jpg)"></mip-img>
    </mip-story-layer>
    ```

	<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-2.png" width="276" height="494" />

  - `template="vertical"`：`<mip-story-layer>` 中的元素沿 `y` 轴排列，`x` 轴方向填充布局。

    ```html
    <mip-story-layer template="vertical">
      <p>element 1</p>
      <p>element 2</p>
      <p>element 3</p>
    </mip-story-layer>
    ```
	<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-3.png" width="276" height="494" />

  - `template="horizontal"`：`<mip-story-layer>` 中的元素沿 `x` 轴排列，`y` 轴方向填充。

    ```html
    <mip-story-layer template="horizontal">
      <p>element 1</p>
      <p>element 2</p>
      <p>element 3</p>
    </mip-story-layer>
    ```

	<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-4.png" width="276" height="494" />

  - `template="thirds"`：支持上中下三列布局，在使用该布局时，内部的元素需要同时加入对应的属性，包括：

    - `flex-area='upper-third'`: 元素位于三等分布局的上部；

    - `flex-area='middle-third'`: 元素位于三等分布局的中部；

    - `flex-area='lower-third'`: 元素位于三等分布局的下部；

      ```html
      <mip-story-layer template="thirds">
        <h1 flex-area="upper-third">element 1</h1>
        <p flex-area="middle-third"></p>
        <p flex-area="lower-third">element 2</p>
      </mip-story-layer>
      ```

	  <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-5.png" width="276" height="494" />

现在您已经了解一个层中的模板布局，现在让我们完成封面的第二层。

对于第二层，我们需要添加主标题和副标题，我们希望这些元素依次排列，所以使用`vertical`模板。如下：

```html
<mip-story>
    <mip-story-view>
        <mip-story-layer template="fill">
            <mip-img  layout="responsive" width="480" class="fade-in-scale" height="720" src="https://www.mipengine.org/static/img/mip-story/p1.png" layout="responsive"></mip-img>
        </mip-story-layer>
        <mip-story-layer>
            <div class="page1-wrap">
                <span>第90届奥斯卡</span>
                <span>The 90th Oscar</span>
                <span class="line"></span>
                <span>颁奖典礼回顾</span>
            </div>
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

​	刷新浏览器我们发现，我们已经开发完完整的封面。

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-6.png" width="276" height="494" />

​	在完成了小故事封面的基础上，我们需要更多的段落来丰富我们的小故事内容，以达到好的用户体验，那么接下来我们讲介绍如何[开发更丰富的段落内容](https://www.mipengine.org/doc/story/create4.html)。


## 小故事开发教程系列

[第一篇、开发小故事前期准备](https://www.mipengine.org/doc/story/add-stroy-before.html)

[第二篇、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[第三篇、创建小故事的封面](https://www.mipengine.org/doc/story/add-stroy-cover.html)

[第四篇、开发更丰富的小故事段落](https://www.mipengine.org/doc/story/add-story-section.html)

[第五篇、小故事内置动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[第六篇、创建小故事的封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[第七篇、小故事的添加统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[第八篇、小故事的MIP规范校验](https://www.mipengine.org/doc/story/add-stroy-validate.html)


