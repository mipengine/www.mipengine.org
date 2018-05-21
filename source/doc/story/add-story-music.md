title: 为小故事添加背景音乐
layout: examples
---

## 小故事封底页面

## 知识储备

​	在阅读本篇前，您需要了解什么小故事，如果您还不了解什么是小故事，可以查看[开发小故事前期准备](https://www.mipengine.org/doc/story/create1.html)、[小故事的组织结构](https://www.mipengine.org/doc/story/create2.html)、[创建小故事的封面](https://www.mipengine.org/doc/story/create3.html)了解基础信息；


## 为小故事添背景音乐

除了采用添加元素交互动画的方式意外，您也可以通过为小故事添加背景音乐的方式来使页面变得更生动；

### 添加全局的背景音乐
我们通过给`mip-story` 标签添加 `background-audio` 属性来为小故事页面添加全局的背景音乐；
```html
<mip-story background-audio="你的音乐地址链接">
    <mip-story-view>
        <mip-story-layer template="fill">
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

### 为小故事的段落页面添加背景音乐
除了添加全局的背景音乐之外，你还可以针对具体的小故事段落添加独立的背景音乐；
我们通过给`mip-story-view` 标签添加 `background-audio` 属性来完成这一操作；
```html
<mip-story>
    <mip-story-view background-audio="你的音乐地址链接">
        <mip-story-layer template="fill">
        </mip-story-layer>
    </mip-story-view>
</mip-story>
```

这里需要注意的是，如果你添加了全局背景音乐，那么将会默认播放全局的背景音乐，针对段落添加的背景音乐将不会生效；

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