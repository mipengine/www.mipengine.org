title: 开发小故事
layout: doc
---

## 小故事是什么？

### 小故事是什么
小故事是一种可交互的多媒体卡片，是由多元化内容组成的媒体形态，可带来沉浸式、多媒体、可交互的浏览体验。

### 小故事产品构成
每个小故事（Story）下有多个段落（View），每个段落（View）可自由组合音频、视频、图片、GIF、文字等富媒体元素(Element)。

<mip-img src="//bos.nj.bpc.baidu.com/v1/agroup/48a9b5adb91150fd48b20d2c63664d27ef00899b" width="588" height="315" layout="responsive" alt="MIP Story 搜索结果页卡片样式"></mip-img>

### 小故事面向人群
小故事采用开放的[MIP技术](https://www.mipengine.org/)，能让站长、自媒体、开发者、商家等各种可以提供优质有创意内容的人群使用工具或MIP技术进行小故事创作。

### 展示示例

<mip-video
    controls
    loop
    muted
    layout="fixed-height"
    width="320"
    height="568"
    src="//mip-extensions.bj.bcebos.com/mip-story/story-in-baidu.mp4"></mip-video>

## 起步教程

### 1. 小故事知识储备和开发环境准备
小故事主要由 [mip-story 组件](/examples/mip-extensions/mip-story.html) 承载，充当小故事中所有段落的容器，按照段落个数自动生成段落导航，返回链接，段落播放完的重播和分享功能。

<mip-img src="//bos.nj.bpc.baidu.com/v1/agroup/d33a3cf786841886a237cdf901affb8ab355e38b" width="309" height="50" alt="MIP Story 进度条示例"></mip-img>

小故事具有三个基本概念：段落（view），层（layer）和元素（element）.

<mip-img src="https://mip-extensions.bj.bcebos.com/mip-story/intro-view-layer-element.jpg" width="1024" height="768" layout="responsive" alt="MIP Story 层级说明图"></mip-img>

- 每个小故事可以包含多个段落（view），每个段落充满屏幕。用户操作翻页后，会看到下一个段落。
- 每个段落又可以包含多个层（layer），单个层可以设置布局模式，如多行布局，左右布局，图片拉伸布局等。
- 元素（element）是资源素材，如背景图，主标题，详细描述等。在 `<h1>`、`<p>`、`<mip-img>` 等标签中声明。

开发小故事需要在合法 [MIP HTML 页面](https://www.mipengine.org/doc/01-mip-demo.html)中引入依赖的组件 JS 脚本文件，如：

```html
<!DOCTYPE html>
<html mip>
...
<body>
    <!-- 组件使用 -->
    <mip-story></mip-story>

    <!-- MIP 运行环境 -->
    <script src="https://c.mipcdn.com/static/v1/mip.js"></script>

    <!-- 小故事依赖脚本 -->
    <script src="https://c.mipcdn.com/static/v1/mip-share/mip-share.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-story/mip-story.js"></script>
    <script src="https://c.mipcdn.com/static/v1/mip-stats-baidu/mip-stats-baidu.js"></script>
</body>
</html>
```

并且 HTML 文件需要遵循 [MIP-HTML 规范](https://www.mipengine.org/doc/2-tech/1-mip-html.html) ，点击 [MIP 文档](https://www.mipengine.org/doc/00-mip-101.html) 了解更多。

### 2. 开发小故事
开发一个小故事，只需要简单的三部：

1. 创建封面以及段落；
2. 为段落添加丰富内容；
3. 为小故事添加封底；

下面请跟随详细步骤教程开始制作你的第一个小故事吧！

#### 2.1 创建多个小故事段落（view）
```html
<mip-story>
    <mip-story-view>
        第一个段落（封面）
    </mip-story-view>
    <mip-story-view>
        第二个段落
    </mip-story-view>
    <mip-story-view>
        第三个段落
    </mip-story-view>
</mip-story>
```

每个小故事可以由多个段落（view）组成，段落之间的切换由 `mip-story` 组件完成，在用户点击屏幕时进行上、下段落的转场切换。

#### 2.2 为段落创建背景
```html
<mip-story>
  <mip-story-view>
    <mip-story-layer template="fill">
      <mip-img width="480" height="720" src="demo.jpg" layout="responsive"></mip-img>
    </mip-story-layer>
  </mip-story-view>
</mip-story>
```

小故事的每个段落可以单独的设置不同的背景，可以由图片、视频组成，在层（layer）元素中添加 `template="fill"` 属性即可让该段落填充该层下的内容。


#### 2.3. 为段落添加主标题
```html
<mip-story>
  <mip-story-view>
    <mip-story-layer template="vertical">
      <h1>最佳影片</h1>                    
    </mip-story-layer>
  </mip-story-view>
</mip-story>
```
在段落的层（layer）内可以创建标题元素 `<h1>` ，并将该层设置为垂直排列（`template="vertical"`）。

#### 2.4. 为段落添加更多内容
```html
<mip-story>
  <mip-story-view>
    <mip-story-layer template="vertical">
      <h1>最佳影片</h1>
      <p>钢铁侠是一部非常好看的科幻片。</p>                    
    </mip-story-layer>
  </mip-story-view>
</mip-story>
```
在标题元素同级可以添加多个内容元素，元素将根据层设置的 `template` 属性来自动排列。

### 3. 为小故事添加封底

在 `<mip-story>` 组件内部添加 `<script type="application/json">` 元素来配置小故事播放结束后的分享、重播功能，如：

```html
<mip-story>
    <script type="application/json">
    {
        "share": {
            "thumbnail": "https://www.mipengine.org/static/img/mip-story/cover.jpg",
            "background": "https://www.mipengine.org/static/img/mip-story/p8.png",
            "title": "第90届奥斯卡颁奖典礼回顾",
            "from": "小故事"
        }
    }
    </script>
    ...
</mip-story>
```

- `share` - 字段下包含的是分享相关的数据
- `share.thumbnail` - 预览小故事的缩略图地址
- `share.background` - 结尾页背景图片地址
- `share.title` - 小故事标题
- `share.from` - 资源的来源信息

## 预览效果

小故事开发完成后，可以直接在浏览器打开编辑的 HTML 文件，预览并确认最终效果。

## 小故事规范校验

小故事基于 [MIP技术](https://www.mipengine.org) 来进行开发，遵循 [MIP-HTML 开发规范](https://www.mipengine.org/doc/2-tech/1-mip-html.html)，开发预览完成后，打开 [MIP 代码校验工具](https://www.mipengine.org/validator/validate)，复制代码到校验工具框内，确认校验通过。点击 [MIP 校验规则](https://www.mipengine.org/doc/2-tech/2-validate-mip.html) 了解相关校验说明。

## 发布小故事
确认小故事页面规范校验通过后，需要将 HTML 文件发布到服务器以便互联网可以通过链接正常访问，通过以下方式让百度搜索引擎发布：

1. 保持服务器稳定可被访问，搜索蜘蛛将主动抓取 HTML 页面
2. 登录[百度站长平台](http://zhanzhang.baidu.com)，提交 MIP 网站验证，并主动提交 MIP 数据

## 小故事进阶教程

### 1. 增加更多元素布局
布局是段落中非常重要的功能，小故事同样也提供了不同的布局方式来供开发者使用，其中包括：

- `fill`：填充布局，该布局方式会将当前 `<mip-story-layer>` 中的第一个元素进行填充布局，其他元素均隐藏。适合于将图片、视频作为背景展示的场景。
- `vertical`：`<mip-story-layer>` 中的元素沿 `y` 轴排列，`x` 轴方向填充布局。
- `horizontal`：`<mip-story-layer>` 中的元素沿 `x` 轴排列，`y` 轴方向填充。

开发者在向 `<mip-story-layer>` 中添加元素时候，可以通过添加 `template` 属性指定相应的布局方式，如：

```html
<mip-story-layer template="vertical">
  <span>用 MIP 讲述你的故事</span>
  <span>用 MIP 创建更优质快速的站点</span>
</mip-story-layer>
```

如果没有添加 `template` 布局，则按照正常的浏览器布局方式进行布局。

### 2. 添加富媒体元素

在小故事的每一个段落中，开发者都可以添加富媒体元素来完善段落，使得段落内容更加丰富，其中常用到的富媒体内容包括：

#### 1). 添加背景音乐
- 全局音频

  全局音频是指贯穿整个小故事来播放的音频，它不受翻页的影响，会在整个小故事呈现的过程中播放。

  - 添加方式

  在 `<mip-story>` 中添加 `background-audio` 属性，用于指定具体音频地址，其中音频地址需要是 HTTPS，否则在 MIP-Cache 下会加载失败。

  - 示例

  ```html
  <mip-story background-audio="https://example.com/example.mp3">
  </mip-story>
  ```

- 段落内音频

  除全局音频之外，`<mip-story>` 也支持在每个单页进行音频的播放，当用户滑动到对应段落时播放音频，离开（翻页，切换到后台）后音频停止。

  - 添加方式
    
    在每个段落（view）中均可通过 `background-audio` 添加背景音频，其中音频地址为 HTTPS 协议。

  - 示例

  ```html
  <mip-story>
    <mip-story-view background-audio="https://example.com/example.mp3">
    </mip-story-view>
  </mip-story>
  ```

#### 2). 添加图片，视频

每个段落（view）中均可添加不同富媒体内容，其中视频和图片就是很重要的元素，一般情况下我们期望将视频作为一个背景图层进行展示，如：

```html
<mip-story>
  <mip-story-view>
    <mip-story-layer template="fill">
      <mip-video layout="responsive" width="100" height="100" poster="https://example.com/example.png" src="https://example.com/example.mp4">
      </mip-video>
    </mip-story-layer>
    <mip-story-layer template="fill">
      <mip-img layout="responsive" width="100" height="100" src="https://example.com/example.png">
      </mip-img>
    </mip-story-layer>
  </mip-story-view>
</mip-story>
```

### 3. 添加元素动画交互
在小故事的层（layer）中可以添加 HTML 元素来完成页面展示，在 HTML 元素中添加 `animate-in` 属性来完成指定的动画效果，例如：可以让标题从左侧滑入、文字淡入出现等。 

```html
<mip-story-layer>
    <h1 animate-in="fade-in">最佳影片</h1>
    <p animate-in="fly-in-left">钢铁侠是一部非常好的科幻片。</p>
</mip-story-layer>
```

小故事提供以下预设动画：

animate-in | 说明
--- | ---
`fade-in` | 淡入
`fly-in-top` | 上侧滑入
`fly-in-bottom` | 下侧滑入
`fly-in-left` | 左侧滑入
`fly-in-right` | 右侧滑入
`twirl-in` | 旋转进入
`whoosh-in-left` | 左侧飞入
`whoosh-in-right` | 右侧飞入
`rotate-in-left` | 左侧旋转飞入
`rotate-in-right` | 右侧旋转飞入

### 4. 添加统计

- PV 使用 [mip-pix 组件统计](/examples/mip/mip-pix.html)
- 交互行为日志使用 [mip-stats-baidu 组件统计](/examples/mip-extensions/mip-stats-baidu.html)

## 更多材料

### 下载小故事demo

~~点击 <https://www.mipengine.org/raw/mip-story-demo.zip> 下载小故事运行示例，可快速帮助熟悉小故事的开发和运行，下载解压后直接浏览器打开 `index.html`  即可看到效果。~~

### MIP 基础知识

MIP技术包含以下：

- HTML、CSS 的基本知识
- HTML 文件在浏览器中预览方法（可直接在浏览器打开或者基于 WEB 服务器打开）
- 了解 [MIP 组件使用方法](/doc/00-mip-101.html)
- 了解 [MIP-HTML 规范](/doc/2-tech/1-mip-html.html) ，如：
  - 不能直接使用img，替换为 `<mip-img>`
  - 不能直接使用行内 `style`，需要标注 `class` ，将样式内联在 `<head>` 中

## 里程碑

功能点 | 状态
--- | ---
背景音频 | 开发中
视频支持 | 开发中
元素动画交互 | 开发中
示例demo | 开发中
