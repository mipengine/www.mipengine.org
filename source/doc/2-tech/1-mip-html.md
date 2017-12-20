title: MIP HTML 规范
layout: doc
---

## 头部使用规范

- 起始标签使用 &lt;!doctype html&gt;

- html 标签必须加上 mip 标记，即:  &lt;html mip&gt;

- 必须包含 &lt;head&gt;和  &lt;body&gt;标签

- 必须在 head 标签中包含字符集声明:  &lt;meta charset="utf-8"&gt;，字符集统一为`utf-8`

- 必须在 head 标签中包含 viewport 设置标签:  &lt;meta name="viewport" content="width=device-width,initial-scale=1"&gt;，推荐包含`minimum-scale=1`

- 必须在 head 标签中包含 &lt; link rel="stylesheet" type="text/css" href="https://c.mipcdn.com/static/v1/mip.css" &gt;

- 必须在 body 标签中包含 &lt;script src="https://c.mipcdn.com/static/v1/mip.js" &gt;&lt;/script &gt;

- 必须在 head 标签中包含 &lt;link rel="canonical" href="http(s)://xxx" &gt;


## 页面元素使用规范

MIP HTML 禁止使用对页面性能以及安全有较大影响的标签，请将其替换为 MIP 的特有标签（例如:将`img`标签替换为`mip-img`）:

|标签|使用范围|备注|
|--|--|--|
|img	|<span class="mipengine-doc-orange"> 替换为 mip-img</span>||
|video	|<span class="mipengine-doc-orange"> 替换为 mip-video</span>||
|audio	|<span class="mipengine-doc-orange"> 替换为 mip-audio</span>||
|iframe	|<span class="mipengine-doc-orange"> 替换为 mip-iframe</span>||
|style	|<span class="mipengine-doc-orange"> 替换为 &lt;style mip-custom&gt;</span>|只能在 head 标签中使用一次|
|script |<span class="mipengine-doc-red"> 禁止使用 </span>|禁止使用 script 标签 , 以下两种情况除外：1）外链 mip 组件所需 js，2）type 为 "application/ld+json" 或 "application/json"|
|svg	|<span class="mipengine-doc-green"> 允许使用 </span>||
|button	|<span class="mipengine-doc-green"> 允许使用 </span>||
|link	|<span class="mipengine-doc-green"> 允许使用 </span>||
|a	    |<span class="mipengine-doc-green"> 允许使用 , 建议使用 [mip-link 组件](/examples/mip-extensions/mip-link.html) 代替 </span>|<span class="mipengine-doc-red"> 不可以 href="javascript:"</span>|
|frame	|<span class="mipengine-doc-red"> 禁止使用 </span>||
|frameset|<span class="mipengine-doc-red"> 禁止使用 </span>||
|object	|<span class="mipengine-doc-red"> 禁止使用 </span>||
|param	|<span class="mipengine-doc-red"> 禁止使用 </span>||
|applet	|<span class="mipengine-doc-red"> 禁止使用 </span>||
|embed	|<span class="mipengine-doc-red"> 禁止使用 </span>||
|form	|<span class="mipengine-doc-orange"> 替换为 mip-form</span>|内部允许使用 input、textarea 标签|
|input elements	|<span class="mipengine-doc-red"> 禁止使用 </span>|包括: select, option|

## HTML 属性

- MIP HTML 中所有 `on` 开头的属性都不允许使用，如：`onclick`，`onmouseover`。
- MIP HTML 中允许使用 `on` 属性。
- MIP HTML 中不允许使用 `style` 属性。

## 自定义样式使用规范

出于性能考虑，html 中不允许使用内联 style，所有样式只能放到 head 的 style 标签里。
- 正确：

```
<head>
    <style mip-custom>
        p { color: #00f;}
    </style>
</head>
<body>
    <p>Hello World!</p>
</body>
```

- 错误：

```
<p style="color:#00f;">Hello World!</p>
```

## 验证规范
[info] MIP 校验工具地址：https://www.mipengine.org/validator/validate
