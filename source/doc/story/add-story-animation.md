title: 创建小故事-小故事内置动画
layout: doc
---

## 小故事内置动画

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；


## 小故事内置动画的使用介绍 

### 小故事内置动画属性

在小故事中，我们提供了一些列的内置动画，您在开发使用时您可以通过将动画入口应用于小故事的层（layer）中的元素来增强MIP的故事。例如，您可以让标题从左侧飞入，或者放入页面或淡入等等。MIP提供了以下预设的动画，通过给元素添加 `animate-in` 属性来完成指定的动画效果。

- 基本用法：

```html
<style mip-custom>
    mip-story-view {
        color: #fff;
    }
    h1 {
        text-align: center;
    }
    .box {
        width: 100px;
        height: 100px;
        background-color: #09f;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
    }
    </style>
<mip-story>
    <mip-story-view>
        <mip-story-layer template="vertical">
            <h1>fade-in</h1>
            <!-- 内置动画的使用方式如下 -->
            <div animate-in="fade-in" class="box"></div>
        </mip-story-layer>
	</mip-story-view>
</mip-story>
```

小故事提供以下预设动画：

| animate-in        | 默认动画时间（ms） | 说明         |
| ----------------- | ------------------ | ------------ |
| `fade-in`         | 500                | 淡入         |
| `fly-in-top`      | 500                | 上侧滑入     |
| `fly-in-bottom`   | 500                | 下侧滑入     |
| `fly-in-left`     | 500                | 左侧滑入     |
| `fly-in-right`    | 500                | 右侧滑入     |
| `twirl-in`        | 1000               | 旋转进入     |
| `whoosh-in-left`  | 500                | 左侧飞入     |
| `whoosh-in-right` | 500                | 右侧飞入     |
| `rotate-in-left`  | 700                | 左侧旋转飞入 |
| `rotate-in-right` | 700                | 右侧旋转飞入 |

- 实际动画示意图如下：

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/%E5%B0%8F%E6%95%85%E4%BA%8B%E5%86%85%E7%BD%AE%E5%8A%A8%E7%94%BB.gif" width="276" height="494" />


在设置了上述`animate-in` 属性的配置后，可以完成对应的动画，但是我们还支持其他属性，配合`animate-in`属性使得动画更加饱满生动，目前每个动画都设有一个内置的默认时间，用于：

- **`animate-in-delay`：延迟**
  - 这是延迟启动动画的时间量。例如，.3s的延迟表示动画在.3秒后进入页面。延迟0s立即开始动画。
  - 是否必填：否
  - 取值：ms/s
- **`animate-in-duration`：持续时间**
  - 这是动画发生的时间量。例如，从开始到结束的淡入动画需要500毫秒。
  - 是否必填：否
  - 取值：ms/s
- **`animate-in-after` ：开始时间**
  - 这是动画发生的开始时间。例如，上述示例中，每个动画都是相对于上一个动画结束开始。
  - 是否必填：否
  - 取值：带有动画元素的id

您可以通过更改`animate-in-delay`、`animate-in-duration`和`animate-in-after` 属性的延迟或持续时间来自定义动画的时间。

- 示例

```html
<mip-story-layer>
      <!-- 以fade-in的形式入场，动画时间持续1000ms, 动画开始前延迟1000ms-->
    <h1 animate-in="fade-in" animate-in-duration="1000" animate-in-delay="1000"  id="first-animate">最佳影片</h1>
      <!--在id为 first-animate 的元素动画动画结束之后开始执行-->
    <p animate-in="fly-in-left" animate-in-after="first-animate">钢铁侠是一部非常好的科幻片。</p>
</mip-story-layer>
```

### 如何设计一个更加生动的MIP页面

​	我们可以通过以下代码实现一个静态页面。

```html
<mip-story-view>
    <mip-story-layer template="fill">
        <mip-img  layout="responsive" width="480" height="720" src="https://www.mipengine.org/static/img/mip-story/p7.png"></mip-img>
    </mip-story-layer>
    <mip-story-layer>
        <div class="common-wrap1">
            <span></span>
            <span>最佳动画短片</span>
            <span>亲爱的篮球</span>
            <span></span>
            <span>最佳动画长片</span>
            <span>寻梦环游记</span>
        </div>
    </mip-story-layer>
    <mip-story-layer>
        <div class="mask"></div>
    </mip-story-layer>
</mip-story-view>
```

在浏览器中可以看到如下页面：


<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/animation-0.png" width="276" height="494" />

如果在此基础上添加动画，那么将使得页面更加生动。

​	我们将首先制作文本的入口动画，并在页面右侧显示“fade-in”。像这样添加`animate-in="fade-in"`到`<span>`元素：

```html
<mip-story-view>
    <mip-story-layer template="fill">
        <mip-img  layout="responsive" width="480" height="720" class="fade-in-scale" src="https://www.mipengine.org/static/img/mip-story/p7.png"></mip-img>
    </mip-story-layer>
    <mip-story-layer>
        <div class="common-wrap1">
            <span></span>
            <span animate-in="fade-in" id="sixth-animation">最佳动画短片</span>
            <span>亲爱的篮球</span>
            <span></span>
            <span>最佳动画长片</span>
            <span>寻梦环游记</span>
        </div>
    </mip-story-layer>
    <mip-story-layer>
        <div class="mask"></div>
    </mip-story-layer>
</mip-story-view>
```

​	接下来，我们给每个图片添加动画。

```html
<mip-story-view>
    <mip-story-layer template="fill">
        <mip-img  layout="responsive" width="480" height="720" class="fade-in-scale" src="https://www.mipengine.org/static/img/mip-story/p7.png"></mip-img>
    </mip-story-layer>
    <mip-story-layer>
        <div class="common-wrap1">
            <span></span>
            <span animate-in="fade-in" id="sixth-animation">最佳动画短片</span>
            <span animate-in="fly-in-left" animate-in-duration=400 animate-in-after="sixth-animation">亲爱的篮球</span>
            <span></span>
            <span animate-in="fade-in" id="sixth-animation">最佳动画长片</span>
            <span animate-in="fly-in-right" animate-in-duration=400 animate-in-after="sixth-animation">寻梦环游记</span>
        </div>
    </mip-story-layer>
    <mip-story-layer>
        <div class="mask"></div>
    </mip-story-layer>
</mip-story-view>
```


<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/animation3.gif" width="276" height="494" />

​	MIP故事中的动画有很多可能性（例如，结合动画，链接动画），本教程中只显示了部分的功能，详细的API请参考[MIP组件的介绍]()。当然您在开发小故事的过程中也可以使用CSS3中的animation来完成小故事的动画，但是在ios11.3系统中，使用animation去实现动画会出现丢失动画效果的问题，这是由于浏览器在解析页面的时，自定义标签元素由于没有默认的display属性的，因此在animation动画间隙时会出现找不到该DOM元素的从而无animation动画，我们推荐您在开发小故事时，可以优先选择已封装好的内置动画。但是如果想要自己写animation动画是需要您在小故事的`mip-story`里添加`display="none"`。您有任何问题欢迎在[issue](https://github.com/mipengine/mip-extensions/issues)中提出意见。

代码示例：

```html
<!DOCTYPE html>
<html mip>
<head>
    <meta charset="utf-8">
    <title>小故事内置动画效果示意图</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no">
    <link rel="stylesheet" type="text/css" href="https://mipcache.bdstatic.com/static/v1/mip.css">
    <link rel="canonical" href="http://www.1905.com/mip/oscar">
    <style mip-custom>
        mip-story {
            display: none;
        }
    </style>
</head>
<body>
    <mip-story>
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


## 小故事开发教程系列

[第一篇、开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)

[第二篇、小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)

[第三篇、创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)

[第四篇、开发更丰富的小故事段落](https://www.mipengine.org/doc/story/create4.html)

[第五篇、小故事内置动画](https://www.mipengine.org/doc/story/create5.html)

[第六篇、创建小故事的封底页面](https://www.mipengine.org/doc/story/create6.html)

[第七篇、小故事的添加统计](https://www.mipengine.org/doc/story/create7.html)

[第八篇、小故事的MIP规范校验](https://www.mipengine.org/doc/story/create8.html)


