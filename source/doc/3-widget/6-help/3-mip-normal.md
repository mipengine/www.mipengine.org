title: 事件通信
layout: doc
---

MIP 提供了强大的组件DOM通信，组件间通信功能，以解决在[MIP组件开发](/doc/2-tech/4-mip-widget.html)中遇到的组件交互问题。可以通过 DOM 属性来触发某个 MIP 元素的自定义事件。

## 应用场景：

DOM通信：
- 点击按钮，弹出层(`<mip-lightbox>`)显示。
- 点击按钮，展开折叠元素(`<mip-showmore>`)。

组件间通信：
- 当用户触发筛选(`<mip-filter>`)时，页面返回顶部(`<mip-gototop>`)。

## 语法

- `on="eventName:id.action"`
- `on="eventName:id.action(args)"`

### 组件内注册监听行为（`action`）：
```js
/**
 * 组件内部绑定事件行为
 *
 * @param  {Object} event 触发时透传的 event 对象
 * @param  {string} str   在 HTML `on` 属性中透传的参数，如：on="tap:id.click(test)"
 */
this.addEventAction('actionName', function (event, str) {});
```

### 组件内触发事件（`event`）：
```js
/**
 * 触发事件
 * @param {string} eventName 事件名称
 * @param {HTMLElement} element 触发的目标元素，注意：事件往递归的向上传播找到匹配 `on="eventName:xxx.xx` 并执行
 * @param {Object} event 事件对象，原生的 Event 对象，如果没有事件对象可以为 {} ，支持透传自定义参数，如：{userinfo: {}}
 */
viewer.eventAction.execute(eventName, element, event);
```

## 目前支持事件

### 1. 全局事件（event）
目前点击事件支持全局触发。用法示例：

```html
<div on="tap:id.custom_event">单击时触发</div>
```

### 2. 组件可被外界监听事件（event）

组件 | 事件 | 事件说明
---- | ---- | ----
mip-form | submit | 表单提交时触发
mip-form | submitSuccess | 表单提交成功
mip-form | submitError | 表单提交失败
mip-form input | change | 输入框内容变化

用法示例：

```html
<mip-form on="submitSuccess:xxx.xxx">表单提交成功后触发xx</mip-form>
```

### 3. 组件可被触发的事件（action）

组件 | 事件 | 事件说明
---- | ---- | ----
mip-fixed | close | 悬浮元素关闭
mip-semi-fixed | close | 悬浮元素关闭
mip-lightbox | close | 弹出层关闭
mip-lightbox | open | 弹出层展开
mip-lightbox | toggle | 弹出层状态切换
mip-sidebar | close | 侧边栏关闭
mip-sidebar | open | 侧边栏展开
mip-sidebar | toggle | 侧边栏状态切换
mip-list | more | 异步加载更多数据

用法示例：

```html
<div on="xxx:mip-fixed01.close">触发弹层关闭事件</div>
```

## 实际示例
### 示例1： DOM 点击通信
```html
<mip-test id="test"></mip-test>

<div on="tap:test.custom_event">不带参数</div>
<div on="tap:test.custom_event(test_button)">带参数</div>
<div on="tap:test.custom_event(test_button) tap:test.custom_event(test_button1)">多个事件</div>
```

```javascript
// mip-test.js
define(function (require) {
    var customEle = require('customElement').create();
    customEle.prototype.firstInviewCallback = function () {
        // 绑定事件，其它元素可通过 on='xxx' 触发
        this.addEventAction('custom_event', function (event/* 对应的事件对象 */, str /* 事件参数 */) {
            console.log(str); // undefined or 'test_button' or 'test_button1'
        });
    };
    return customEle;
});
```
[info] DOM 点击通信可运行示例见 [mip-showmore 示例](/examples/mip-extensions/mip-showmore.html)。

### 示例2：使用 DOM 属性实现组件间通信

当用户触发筛选(`<mip-filter>`)时，页面返回顶部(`<mip-gototop>`)。

```html
<-- on="主动通信组件内绑定的可监听事件:被通信组件id.被通信组件暴露出来的方法"-->
<mip-filter on="filt:mygototop01.gototop"></mip-filter>

<mip-fixed type="gototop">
    <mip-gototop id="mygototop01"></mip-gototop>
</mip-fixed>
```

```js
// mip-filter.js 抛出 'filt' 事件（event），在 DOM 中通过 on 绑定。
define(function (require) {
    var customEle = require('customElement').create();
    var viewer = require('viewer');
    customEle.prototype.firstInviewCallback = function () {
    	this.element.addEventListener('click', function(event) {
    		filt(); // 筛选逻辑
    		// 触发组件本身的'filt'事件
			viewer.eventAction.execute('filt', event.target, event);
    	});
    };
    return customEle;
});

// mip-gototop.js 定义 'gototop' 操作(action)，方便 eventAction 从外部触发。
define(function (require) {
    var customEle = require('customElement').create();
    var viewer = require('viewer');
    // 尽早绑定事件，写在 build 声明周期中。
    customEle.prototype.build = function () {
    	addGotoTopEventHandler(); //组件点击事件监听及处理
    	// 定义 gototop 事件，方便 eventAction 从外部触发。
    	this.addEventAction('gototop', function (event/* 对应的事件对象 */, str /* 事件参数 */) {
            pageScrollTop(); //组件内定义的页面回顶操作。
        });
    };
    return customEle;
});
```

## 注意事项
1. HTML 属性中的`on`值空格用于分割多个事件，单个事件内部不能出现空格。
```
<div on="tap:id01.custom_event1 tap:id02.custom_event2">多个事件</div>
```
2. 传的参数将变成字符串，如 `on="tap:id.action(1,2,3)"`，得到的不是`1` ，而是`"1"`。
3. 事件将向上冒泡传播，如单击示例中`mip-xx1`, 两个标签的`tap`事件都会触发。
```
<mip-xx1 on="tap:id.action">
    <mip-xx2 on="tap:id2.action2"></mip-xx2>
</mip-xx1>
```

