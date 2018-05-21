title: 为小故事添加更多的内容段落
layout: examples
---

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；

## 为小故事添加更多段落

​	现在你已经了解了如何使用`mip-story-view`标签创建一个小故事的段落，就如同创建封面那样，我们来继续添加其他的内容段落；

### 添加第一个内容段落

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

### 添加第二个内容段落

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




添加完内容段落之后，接下来，我们需要去完善一下小故事的封底页面；


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