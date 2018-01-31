title: 组件开发规范
layout: doc
---

本教程将帮助您开发出理想的自定义组件。

## 开发文档

站长开发扩展组件请参照下面链接

[扩展组件开发文档](https://github.com/mipengine/mip-extensions/blob/master/docs/README.md)

## 开发辅助工具库

- [开发辅助工具和模块](/doc/3-widget/6-help/1-introduce.html)
- [手势：单击，双击，滑动](/doc/3-widget/6-help/2-gesture.html)
- [其它：dom触发js事件](/doc/3-widget/6-help/3-mip-normal.html)

## 组件上线

- [组件开发平台](https://www.mipengine.org/platform/)

## 组件类型划分

### 1. 内置组件

定义：为了解决性能、安全性问题必须要使用的组件，代码被集成在 `mip.js` 中。如 `mip-img`、`mip-video` 等。

### 2. 扩展组件

定义：其它类型的组件，一般情况下组件开发都是扩展组件，使用时需要引入对应的 JS 文件。
