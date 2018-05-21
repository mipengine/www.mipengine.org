title: 为小故事段落中的元素添加交互动画
layout: examples
---

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；

## 使用小故事内置动画

为了小故事页面更生动，你可以为页面上的元素添加一些入场动画。比如：

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/animation3.gif" width="276" height="494" />

这里我们为你封装好了一些常用的动画类型，你可以直接按照下面描述的方法直接使用；

### 小故事内置的动画

#### 基本用法

  通过给页面元素添加 `animate-in` 属性来进行入场元素动画的设置；

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

在小故事的框架中，我们提供了以下预设动画：

| animate-in        | 默认动画时间（ms） | 说明     |
| ----------------- | ---------- | ------ |
| `fade-in`         | 500        | 淡入     |
| `fly-in-top`      | 500        | 上侧滑入   |
| `fly-in-bottom`   | 500        | 下侧滑入   |
| `fly-in-left`     | 500        | 左侧滑入   |
| `fly-in-right`    | 500        | 右侧滑入   |
| `twirl-in`        | 1000       | 旋转进入   |
| `whoosh-in-left`  | 500        | 左侧飞入   |
| `whoosh-in-right` | 500        | 右侧飞入   |
| `rotate-in-left`  | 700        | 左侧旋转飞入 |
| `rotate-in-right` | 700        | 右侧旋转飞入 |

各种动画的交互示意如下图所示

<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/%E5%B0%8F%E6%95%85%E4%BA%8B%E5%86%85%E7%BD%AE%E5%8A%A8%E7%94%BB.gif" width="276" height="494" />

#### 动画的高级属性

在设置了上述`animate-in` 属性的配置后，元素就可以动起来了。同时我们还支持一些其他的动画配置，用于动画的细节调整，入场动画还支持的配置项如下：

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

### 动画的使用案例

我们可以通过以下代码实现一个静态页面。

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



## 使用css动画

当然，内置的动画在某些场景下无法完全满足需求，真对此，我们也兼容传统的css aniamtion属性动画，你可以在页面中`<style mip-custom></style>` 中定义你的css animation, 并在你的元素中使用他；

notice:  由于customElement在IOS 11.3上的css animation 存在些兼容性问题，直接使用css动画可能会导致部分情况下动画第一帧丢失，这个问题我们正在解决中。你可以通过显示的为`mip-story`组件声明`display`属性来避免这个问题；

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
          	display:none;
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

