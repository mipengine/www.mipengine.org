title: 对小故事进行页面代码规范校验
layout: examples
---

## 知识储备

​​&emsp;&emsp;在阅读本篇前，您需要了解什么是小故事，可以查看[开发小故事前期准备](/doc/story/add-story-before.html)、[小故事的组织结构](/doc/story/story-organization-structure.html)、[创建小故事的封面](/doc/story/add-story-cover.html)和[创建小故事的封底页面](/doc/story/add-story-end.html)了解基础信息；

## 小故事的MIP规范校验

​​​&emsp;&emsp;小故事本身是基于mip技术开发的html页面，如果想要被搜索收录并被`mip cache`缓存，需要您的小故事页面符合mip的规范校验。我们提供以下两种方法对页面进行代码规范的检查。

### 使用在线校验工具

​​&emsp;&emsp;首先打开 [MIP 校验工具](https://www.mipengine.org/validator/validate) 的校验网页，把您开发的小故事页面代码复制粘贴到MIP代码校验工具的可视化区域，在网页的底部就会显示出您开发的小故事页面是否符合MIP规范。

​​&emsp;&emsp;如果校验通过，则会显示绿色的**`SUCCESS → 验证成功，完全符合MIP规范`**提示您页面校验成功。

![success](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/success.png)

​​&emsp;&emsp;如果校验不通过，则会显示红色的**`ERROR → line x,col x:xxxxxxxx`** 提示您页面校验不成功，并且定位校验错的行号和列号。

![fail](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/fail.png)

### 使用mip命令行工具

​​&emsp;&emsp;使用[MIP-CLI](http://www.cnblogs.com/mipengine/p/mip_cli_1_install.html)工具中的`mip validate`命令。MIP-CLI是mip 开发工具，用于 MIP 页面和组件的开发和校验。依赖环境为 **Node.js (>=4.x)**
输入`node -v` 查看 node 版本，如果版本为 5.x，6.x，[ 请点击这里 ](http://www.cnblogs.com/mipengine/p/mip_cli_1_install.html#question1)。

- 示例:

![img](http://mip-doc.bj.bcebos.com/mip-blog-11/11_node_v.png)

将安装好的 node 打开 输入以下指令（mac系统需要sudo）：

```
$ npm install -g mip-cli
```

mac系统需要使用以下指令：

```
$ sudo npm install -g mip-cli
```

出现以下界面显示正在安装：

![img](http://mip-doc.bj.bcebos.com/mip-blog-11/11_install.png)

如果安装过程中有报错，[ 请点击这里查看解决办法 ](http://www.cnblogs.com/mipengine/p/mip_cli_1_install.html#question2)。

检验是否安装成功可以输入`mip -V`，如果出现 mip 版本号，则表示安装成功。

![img](http://mip-doc.bj.bcebos.com/mip-blog-11/11_mip_V.png)

​​&emsp;&emsp;此时您已经成功安装好MIP-CLI，在控制台直接输入`mip validate xxx.html`，其中xxx.html文件为您自己开发的mip页面。您可以查看是否通过校验。

- 可以看到如果成功，控制台将显示以下提示：

![success1](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/success1.png)

- 如果失败，控制台会显示失败原因，并且定位错误信息的出处：

![fail1](http://mipstatic.baidu.com/static/mip-static/mip-story/demo/static/fail1.png)

​​​&emsp;&emsp;在校验的同时，可能会有各种报错，那么您可以通过查看[MIP校验错误列表](/doc/2-tech/2-validate-mip.html)来定位出错的位置和原因，修改并且重新校验，校验通过就可以提交部署MIP小故事页面了。


上一节：[为小故事添加页面统计](/doc/story/add-story-pix.html)

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

