title: 为小故事添加更多的内容段落
layout: examples
---

## 知识储备

​​​&emsp;&emsp;在阅读本篇前，您需要了解什么是小故事，可以查看[开发小故事前期准备](/doc/story/add-story-before.html)、[小故事的组织结构](/doc/story/story-organization-structure.html)、[创建小故事的封面](/doc/story/add-story-cover.html)了解基础信息；

## 为小故事添加更多段落

​​&emsp;&emsp;在了解了如何使用`mip-story-view`标签的基础上，接下来继续添加其他的内容段落；

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

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/vertical-0.png" width="276" height="494" />
</div>

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

<div align=center>
    <img src="http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/fill-0.png" width="276" height="494" />
</div>

​​&emsp;&emsp;以上是分别两种不同形式的，可满足您在开发过程的不同布局需求，完成内容段落之后，接下来，需要去完善一下小故事的封底页面；

上一节：[为小故事创建一个封面](/doc/story/add-story-cover.html)。

下一节：[为小故事段落中的元素添加交互动画](/doc/story/add-story-animation.html)。


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

