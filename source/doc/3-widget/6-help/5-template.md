title: template 模板
layout: doc
---

template 模板封装了第三方模板引擎 Mustache.js，可以访问[Mustache.js 文档](https://github.com/janl/mustache.js/)了解更多信息。本组件暂时只支持辅助其他 MIP 组件完成模板渲染工作，直接使用不会渲染。个性化 MIP 组件需要按照[MIP组件开发规范](https://www.mipengine.org/doc/2-tech/4-mip-widget.html)封装。

标题|内容
----|----
所需脚本|https://c.mipcdn.com/static/v1/mip-mustache/mip-mustache.js

## 示例

```
<!-- 模板引擎类型的组件统一使用 `<template>` 标签 -->
<template type="mip-mustache">
Hello {{world}}!
</template>

/**
 * 组件脚本代码
 *
 * element {HTML node} HTML DOM 节点
 * data    {Object}    是传递给模板用来渲染的数据
 * html    {string}    编译后的 html 字符串
 */
var templates = require('templates');
templates.render(element, data).then(function (html) {
	element.innerHTML = html;
});
```

## 属性

### type

说明：模板引擎类型
必选项：是
类型：字符串

## Mustache 语法

### 基本使用

```
- data

{
    name: 'Chris',
    age: '15',
    sex: '<b>female</b>'
}

- Template

<template type="mip-mustache" id="mip-template-id">
<li>name: {{name}}</li>
<li>age: {{age}}</li>
<li>sex: {{sex}}</li>
<li>sex: {{{sex}}}</li>
<li>sex: {{&sex}}</li>
{{=<% %>=}}
<li>sex: {{sex}}</li>
<%={{ }}=%>
</template>

- 编译后的 html

<li>name: Chris</li>
<li>age: 15</li>
<li>sex: &lt;b&gt;female&lt;&#x2F;b&gt;</li>
<li>sex: <b>female</b></li>
<li>sex: </li>
<li>sex: {{sex}}</li>
```

### 复杂data的使用

```
- data

{
    name: {
        first: 'Michael',
        last: 'Jackson'
    },
    age: '15'
}

- Template

<template type="mip-mustache" id="mip-template-id">
<li>name: {{name.first}} {{name.last}}</li>
<li>age: {{age}}</li>
</template>

- 编译后的 html

<li>name: Michael Jackson</li>
<li>age: 15</li>
```

### 对象数组

```
- data

{
    "stooges": [
        { "name": "Moe" },
        { "name": "Larry" },
        { "name": "Curly" }
    ]
}

- Template

<template type="mip-mustache" id="mip-template-id">
{{#stooges}}
<li>{{name}}</li>
{{/stooges}}
</template>

- 编译后的 html

<li>Moe</li>
<li>Larry</li>
<li>Curly</li>
```

### 一维数组

```
- data

{
    musketeers: ["Athos", "Aramis", "Porthos", "D'Artagnan"]
}

- Template

<template type="mip-mustache" id="mip-template-id">
{{#musketeers}}
<li>{{.}}</li>
{{/musketeers}}
</template>

- 编译后的 html

<li>Athos</li>
<li>Aramis</li>
<li>Porthos</li>
<li>D'Artagnan</li>
```

### 循环函数

```
- data

{
    "beatles": [
        { "firstName": "John", "lastName": "Lennon" },
        { "firstName": "Paul", "lastName": "McCartney" },
        { "firstName": "George", "lastName": "Harrison" },
        { "firstName": "Ringo", "lastName": "Starr" }
    ],
    "name": function () {
        return this.firstName + " " + this.lastName;
    }
}

- Template

<template type="mip-mustache" id="mip-template-id">
{{#beatles}}
<li>{{name}}</li>
{{/beatles}}
</template>

- 编译后的 html

<li>John Lennon</li>
<li>Paul McCartney</li>
<li>George Harrison</li>
<li>Ringo Starr</li>
```

### 函数

```
- data

{
  "name": "Tater",
  "bold": function () {
    return function (text, render) {
      return "<b>" + render(text) + "</b>";
    }
  }
}

- Template

<template type="mip-mustache" id="mip-template-id">
{{#bold}}Hi {{name}}.{{/bold}}
</template>

- 编译后的 html

<b>Hi Tater.</b>
```

### 空数组的处理

```
- data

{
  "repos": []
}

- Template

<template type="mip-mustache" id="mip-template-id">
{{#repos}}<li>{{name}}</li>{{/repos}}
{{^repos}}No repos !!{{/repos}}
</template>

- 编译后的 html

No repos !!
```

可以访问[Mustache.js 文档](https://github.com/janl/mustache.js/)了解更多信息。
