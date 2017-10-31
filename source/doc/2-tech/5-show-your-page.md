title: Canonical 使用规范
layout: doc
---

在某些情况下，站点对于同一个 html 页面，可能存在两种，一个是 *mip 页 *，一个是 * 原页面 *。百度会抓取这两个页面，并利用 canonical 标签将它们联系起来。

## 关联标签

你必须在 MIP 添加`<link rel="canonical">`指向原始页面，以保证 MIP 更好的继承原始页面的权重。
使用规则：
- 在 **MIP 页 ** 中使用`<link rel="canonical”>`，指向 ** 原页面 **(m 站)，也可以指向原始网页中`<link rel="canonical">`所指向的 pc 页。
- 若 **MIP 页 ** 没有对应的 ** 原页面 **，则指向 MIP 页本身 url。

## 在 head 中添加 link 标签让百度搜索发现你的页面

### MIP 和 非 MIP 页面同时存在

    在 MIP 页中添加：

    <link rel="canonical" href="https://m.baidu.com/demo.html">

### 如果只有 MIP 页

  同样需要添加，指向自己：

    <link rel="canonical" href="https://m.baidu.com/mip/demo.html">

## 新建 MIP 页的文件 path 建议

[info] 原网页与 MIP 页的 url 的对应关系尽量简单、直接。

原网页出现的文档名或文档 id，在 MIP 页命名时也要出现。
如：原页面 url 为：https://m.baidu.com/123.html

|例子|是否可用|
|--|--|
|https://mip.baidu.com/123.html|<span class="mipengine-doc-green"> 可用 </span>|
|https://m.baidu.com/mip/123.html|<span class="mipengine-doc-green"> 可用 </span>|
|https://m.baidu.com/mip_123.html|<span class="mipengine-doc-green"> 可用 </span>|
|https://mip.baidu.com/mip_123.html|<span class="mipengine-doc-green"> 可用 </span>|
|https://m.baidu.com/mip_001.html|<span class="mipengine-doc-orange"> 不建议 </span>|
