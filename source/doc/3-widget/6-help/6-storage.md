title: 存储
layout: doc
---

存储模块提供的 JS 不能直接在页面`<script>`标签中使用，但在[开发 MIP 组件](https://www.mipengine.org/doc/2-tech/4-mip-widget.html)时可以在组件 JS 中引用。

存储模块为站点提供数据存储的功能，包括 localStorage 存储方式、通过 fetch 请求携带存储数据，站点自行在后端管理存储的方式。

## 示例
```
var util = require('util');
var CustomStorage = util.customStorage;
var storage = new CustomStorage([type]);
```

## API

### **new util.customStorage(type)**

customStorage 类，用于初始化存储对象。

参数列表

参数|类型|必选|描述
---|---|---|---
type|number|是|type为存储类型，0表示 localStorage存储，1表示站点管理存储

示例

```
var CustomStorage = util.customStorage;
var storage = new CustomStorage(0);
```

### **customStorage.set(name, value, [expire], [callback])**

设置当前站点下的存储。

参数列表

参数|类型|必选|描述
---|---|---|---
name|string|是|存储名称
value|string|是|存储值
expire|number|否|存储的过期时间，指的是当前站点整个存储的过期时间，单位为ms
callback|Function|否|存储出现问题时的回调

示例

```
btn.onclick = function() {
    customStorage.set('name', 'jake');
    customStorage.set('age', '22');
}
```

callback返回的error对象结构

参数|类型|描述
---|---|---
errCode|string|错误号，21为当前站点存储超限，22为整个localStorage存储空间不足
errMess|string|错误信息

### **customStorage.get(name)**

获取当前站点下的存储。

参数列表

参数|类型|必选|描述
---|---|---|---
name|string|是|存储名称

示例

```
var name = customStorage.get(name);
```

### **customStorage.rm(name)**

删除当前站点下的存储。

参数列表

参数|类型|必选|描述
---|---|---|---
name|string|是|存储名称

示例

```
customStorage.rm('name');
```

### **customStorage.rmExpires()**

删除整个localStorage存储中过期的站点存储数据。

示例

```
customStorage.rmExpires();
```

### **customStorage.clear()**

清空当前站点下数据存储。

示例

```
customStorage.clear();
```

### **customStorage.request(opt)**

通过该方法发起请求，将数据通过请求传给站长，由站点自行对数据进行设置或获取；请求通过fetch的方式发出，具体可参考 mdn 提供的[使用fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)和[GlobalFetch.fetch()](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch/fetch)两篇文章。

参数列表

参数|类型|必选|描述
---|---|---|---
url|string|是|发送请求的地址
method|string|否|默认为get，请求方法 (GET, POST, or other)
mode|string|否|请求的模式，如 cors, no-cors,  same-origin
headers|Object|否|请求的头信息，形式为 Headers 对象或 yteString
body|Object|否|请求的 body 信息,可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象，注意 GET 或 HEAD 方法的请求不能包含 body 信息
credentials|string|否|请求的 credentials，如omit、same-origin 或者 include
cache|string|否|请求的 cache 模式: default, no-store, reload, no-cache, force-cache, or only-if-cached

示例

```
storage1.request({
    url: 'http://example.com/',
    type: 'POST',
    data: JSON.stringify({
      name: 'jack',
      age: 22
    }),
    success: function() {
      console.log('success');
    },
    error: function(e) {
      console.log(e);
    }
});
```

后端配置

请求采用 cors (跨域资源共享)的方式，需要站点后端配置 response header 才能使用，配置方式如下：

`Access-Control-Allow-origin: origin`，这个设置为允许跨站访问的域名，可以为百度 cache 域名和站长域名，不建议设置为`*`，目前百度 cache 域名需配置如下两个，分别为 `mipcache.bdstatic.com` 和 `*.mipcdn.com`。
