title: 创建小故事-小故事段落的开发
layout: doc
---

## 小故事段落的开发

​	本篇主要提讲解如何创建更加丰富的小故事段落；

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；

## 小故事段落的开发介绍

​	现在您已经熟悉了如何在MIP故事中添加一个段落，如我们在创建小故事封面中所提到的一样。接下来将讲解如何创建剩余的页面。

- 使用单层

   添加新的一个段落，在单个图层中显示图片和文字。

   包含一层，布局为`vertical`，包含三个元素：标题、图片、副标题。

	```html
	<mip-story>
		<mip-story-view>
			<mip-story-layer template="vertical">
				<!-- 主标题 -->
				<div class="common-wrap">山姆·洛克威尔</div>
				<mip-img layout="responsive" width="1242" height="1665" src="./static/p5.png"></mip-img>
				<!-- 副标题 -->
				<div class="common-wrap-1">
					<span></span>
					<span>最佳男配角</span>
					<span>主演：三块广告牌</span>
				</div>
			</mip-story-layer>
		</mip-story-view>
	</mip-story>
	```

	<img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/vertical-0.png" width="276" height="494" />

- 使用双层

  添加两层，文本并联排列。

  ```html
  <mip-story>
      <mip-story-view>
          <mip-story-layer template="fill">
              <mip-img layout="responsive" width="480" height="720" src="https://www.mipengine.org/static/img/mip-story/p6.png"></mip-img>
          </mip-story-layer>
          <mip-story-layer template="thirds" class="common-wrap-2">
              <div flex-area="upper-third">艾莉森·珍妮</div>
              <div flex-area="middle-third"></div>
              <div flex-area="lower-third">
                  <span></span>
                  <div>最佳女配角</div>
                  <div>主演: 我，花样女王</div>
              </div>
          </mip-story-layer>
      </mip-story-view>
  </mip-story>
  ```
  <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/fill-0.png" width="276" height="494" />


  以上是我们在添加页面的时候几种方式，接下来创建的小故事的分享页。


## 小故事开发教程系列

[第一篇、开发小故事前期准备](https://www.mipengine.org/doc/story/add-stroy-before.html)

[第二篇、小故事的组织结构](https://www.mipengine.org/doc/story/story-organization-structure.html)

[第三篇、创建小故事的封面](https://www.mipengine.org/doc/story/add-stroy-cover.html)

[第四篇、开发更丰富的小故事段落](https://www.mipengine.org/doc/story/add-story-section.html)

[第五篇、小故事内置动画](https://www.mipengine.org/doc/story/add-story-animation.html)

[第六篇、创建小故事的封底页面](https://www.mipengine.org/doc/story/add-story-end.html)

[第七篇、小故事的添加统计](https://www.mipengine.org/doc/story/add-story-pix.html)

[第八篇、小故事的MIP规范校验](https://www.mipengine.org/doc/story/add-stroy-validate.html)


