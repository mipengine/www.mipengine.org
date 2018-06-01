title: 为小故事创建一个封面
layout: examples
---

## 知识储备

​&emsp;&emsp;在阅读本篇前，您需要了解什么是小故事，可以查看[开发小故事前期准备](/doc/story/add-story-before.html)、[小故事的组织结构](/doc/story/story-organization-structure.html)了解基础信息；

## 小故事的封面的开发

### 添加一个封面

​&emsp;&emsp;MIP小故事中的页面由`<mip-story-view>`组件表示。在`<mip-story>`组件内部，您可以添加一个或多个`<mip-story-view>`组件。

​&emsp;&emsp;首先添加第一个小故事段落，在代码中添加一个`mip-story-view` 标签。在小故事页面中，第一个段落通常被定义小故事封面，因此给它添加一个唯一的id为 `cover`;

```html
<mip-story id="story-demo">
    <mip-story-view id="cover">
        ...
    </mip-story-view>
</mip-story>
```

​&emsp;&emsp;以上是小故事封面，接下来添加封面的内容；

### 在封面中添加图层

​&emsp;&emsp;在MIP故事页面中可以使用图层来创建视觉效果。层层叠在一起，因此，第一层是底层，下一层在顶层，依此类推。如下图所示：

​&emsp;&emsp;封面实际上由两层组成：

- **第1层**：作为背景的图片
- **第2层**：故事的标题和副标题

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/story-layer.png" width="350" height="494" />
</div>

#### 2.1 创建封面的背景图

&emsp;&emsp;将第一层添加到封面上。该图层包含填充屏幕的图像。

​&emsp;&emsp;通过为`<mip-story-view>`元素添加子元素`<mip-story-layer>`的方式来创建图层。为了使封面页的背景图片充满屏幕，可设置`<mip-story-layer>`中的**`template`属性**为`fill`，指定该`template="fill"`。在图层内部，[`<mip-img>`](/examples/mip/mip-img.html)为`cover.jpg`文件添加一个元素，并确保它对`layout="responsive"`图像尺寸为720 x 1280像素的响应。

- 示例：

```html
<mip-story>
    <mip-story-view>
        <mip-story-layer template="fill">
            <mip-img layout="responsive" width="720" height="1280" src="https://www.mipengine.org/static/img/mip-story/p1.png"></mip-img>
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

​​&emsp;&emsp;通过以上代码，可以实现封面图片的显示，图形化界面如下：

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-0.png" width="276" height="494" />
</div>

#### 2.2 创建封面的内容

​&emsp;&emsp;在完成第一层的背景图之后，需要填充封面页上的内容，如主标题和副标题。

​&emsp;&emsp;在页面中继续添加一个`<mip-story-layer>` 标签，并给他添加子元素主标题和副标题。 为了使这些元素依次排列，需给`<mip-story-layer>`的`template`属性赋值`vertical`。

- 示例：

```html
<mip-story>
    <mip-story-view>
        <mip-story-layer template="fill">
            <mip-img  layout="responsive" width="480" height="720" class="fade-in-scale" src="https://www.mipengine.org/static/img/mip-story/p1.png" layout="responsive"></mip-img>
        </mip-story-layer>
        <mip-story-layer template="vertical">
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

​​&emsp;&emsp;通过以上代码，可实现完整的小故事封面，图形化界面如下：

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-6.png" width="276" height="494" />
</div>

### `template`布局

​​&emsp;&emsp;`template`是`<mip-story-layer>`组件的一个属性，可以通过设置该属性的值来完成的段落的整体布局结构；
`template` 有以下几种取值。

#### `fill`
​​&emsp;&emsp;填充布局，该布局方式会将当前 `<mip-story-layer>` 中的第一个元素进行填充布局，其他元素均隐藏。适合于将图片、视频作为背景展示的场景。如图：

```html
<mip-story-layer template="fill">
    <mip-img src="cover.jpg"></mip-img>
</mip-story-layer>
```

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-2.png" width="276" height="494" />
</div>

#### `vertical`
​&emsp;&emsp;`<mip-story-layer>` 中的元素沿 `y` 轴排列，`x` 轴方向填充布局。

```html
<mip-story-layer template="vertical">
  <p>element 1</p>
  <p>element 2</p>
  <p>element 3</p>
</mip-story-layer>
```

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-3.png" width="276" height="494" />
</div>


#### `horizontal`
​​&emsp;&emsp;`<mip-story-layer>` 中的元素沿 `x` 轴排列，`y` 轴方向填充。

```html
<mip-story-layer template="horizontal">
  <p>element 1</p>
  <p>element 2</p>
  <p>element 3</p>
</mip-story-layer>
```
<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-4.png" width="276" height="494" />
</div>

#### `thirds`

​​&emsp;&emsp;支持上中下三列布局，在使用该布局时，内部的元素需要同时加入对应的属性，包括：

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
<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/cover-5.png" width="276" height="494" />
</div>


​​&emsp;&emsp;至此，已经完成了小故事封面的开发，接下来需填充更多的段落来丰富其内容；

上一节：[小故事的组织结构](/doc/story/story-organization-structure.html)。

下一节：[为小故事添加更多的内容段落](/doc/story/add-story-section.html)。

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

