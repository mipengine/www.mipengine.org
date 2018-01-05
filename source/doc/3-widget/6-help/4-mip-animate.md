title: 动画
layout: doc
---

下文提到的动画函数不能直接在页面`<script>`标签中使用，但在[开发MIP组件](https://www.mipengine.org/doc/2-tech/4-mip-widget.html)时可以在组件JS中引用。

Naboo 是一个前端动画解决方案，包含动画调度机制和动画工具集，支持串并行动画及回调，支持自定义插件。组件中应用示例参见 [mip-img.js](https://github.com/mipengine/mip/blob/master/src/components/mip-img.js)

## 1. 声明

可以在类和实例中根据场景进行挑选使用

```javascript
var util = require('util');

// 类对象
var Naboo = util.naboo;

// 实例对象
var naboo = new util.naboo();
naboo.animate(...);
```

## 2. 使用

### 1) naboo.animate(dom, prop, opt)

- 描述：animate插件，专门用于进行动画操作的插件。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
dom|Object|是|需要进行动画的dom元素
prop|Object|是|需要进行动画π的css属性键值对对象
opt|Object|否|可选的动画参数对象
opt.duration|number|否|动画时长，默认值400，单位ms
opt.ease|string|否|动画的缓动函数名，默认值ease，可选值包括ease、linear、ease-in、ease-out、ease-in-out
opt.delay|number|否|动画延迟执行的时间，默认值0，单位ms
opt.cb|Function|否|动画完成后的回调函数
opt.mode|string|否|动画的模式，默认值transition，可选值包括transition、keyframes(暂未支持)、js(暂未支持)

- 代码示例
    ```
    naboo.animate(dom, {
        'transform': 'translateX(200px)'
    }, {
        duration: 2000,
        ease: 'ease',
        delay: 1000,
        mode: 'transition',
        cb: function() {
            console.log(1);
        }
    }).start();
    ```


### 2) naboo.start(fn)

- 描述：开始执行动画的指令函数。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
fn|Function|否|动画完成后的回调函数

- 使用示例：

    ```javascript
    naboo.animate(dom, {
        'transform': 'translateX(200px)'
    }, {
        duration: 2000
    }).start();
    ```

### 3) naboo.next()

- 描述：让动画进入下一步的指令函数，在调用 done 或者 register（注册插件）方法需要调用 next() 才能进入下一个动画。

- 参数列表：无

- 使用示例：

    ```javascript
    naboo.animate(dom, {
        'transform': 'translateX(200px)'
    }, {
        duration: 2000
    }).done(function(next) {
        console.log(1);
        next();
    });
    ```

### 4) naboo.cancel()
- 描述：取消动画的指令，调用该函数后，当前未执行完的动画仍会继续执行完成，后续的动画不会执行。

- 参数列表：无

- 使用示例：

    ```javascript
    var instance;
    btnStart.onclick = function () {
        instance = naboo.animate(dom, {
            'transform': 'translateX(200px)'
        }, {
            duration: 2000,
            cb: function() {
                console.log(1);
            }
        }).start();
    }
    btnCancel.onclick = function () {
        instance.cancel();
    }
    ```

### 5) naboo.on(name, fn)

- 描述：事件绑定，可以通过该函数绑定自定义事件。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
name|string|是|事件名
fn|Function|是|事件触发的方法

- 使用示例：

    ```javascript
    var handle = function(event) {
        console.log(event);
    }
    btn.onclick = function () {
        naboo.on("customer", handle);
    }
    ```

### 6) naboo.off(name, fn)

- 描述：解除事件绑定。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
name|string|否|事件名，如果为空则解除所有事件
fn|Function|否|事件触发的方法，如果为空则解除该name下所有事件

- 使用示例：

    ```javascript
    var handle = function(event) {
        console.log(event);
    }
    btn.onclick = function () {
        console.log('解除事件');
        naboo.off("customer", handle);
    }
    ```

### 7) naboo.trigger(name, data)

- 描述：触发事件。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
name|string|是|事件名，如果为空则解除所有事件
data|Object|否|触发事件时需要传递的数据

- 使用示例：

    ```
    btn.onclick = function () {
        naboo.trigger("customer", {
            a: 1
        });
    }
    ```
### 8) naboo.p(list)

- 描述：Naboo的并行插件，通过该方式可以将多个动画并发执行，可以通过类或实例对象进行调用。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
list|array|是|需要并行的naboo对象列表

- 使用示例：

    ```javascript
    naboo.p(
        naboo.animate(dom1, {
            'transform': 'translateX(200px)'
        }, {
            duration: 2000,
            cb: function() {
                console.log(1);
            }
        }),

        naboo.animate(dom2, {
            'transform': 'translateX(200px)'
        }, {
            duration: 3000,
            cb: function() {
                console.log(2);
            }
        })
    ).start();
    ```

### 8) naboo.done(fn)

- 描述：Naboo的done插件，可用于在任何一个动画插件后进行回调，可以通过类或实例对象进行调用。

- 注意：需要在该方法中调用 **next()** 才能进入下一步的动画，因为考虑到可能会有一些异步行为，如 ajax 请求。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
fn|function|是|回调函数

- 使用示例：

    ```javascript
    naboo.animate(dom1, {
        'transform': 'translateX(200px)'
        }, {
            duration: 2000,
            cb: function() {
                console.log(1);
            }
        }).done(function(next) {
            console.log(2);
            next();
        }).animate(dom2, {
            'transform': 'translateX(200px)'
        }, {
            duration: 2000,
            ease: "ease",
            cb: function() {
                console.log(3);
            }
    }).start();
    ```

P.S.: 示例代码标识在dom1的动画执行完成后再执行dom2的动画

## 3. 类的静态方法：Naboo.register(name, fn)

- 描述：插件注册函数，如果animate不能满足需求，亦或是站长需要封装自己的插件来做到方便调用，可以通过该方式来进行方法注册。

- 注意：在实现register fn时需调用next()才能执行下一个动画。

- 参数列表：

参数|类型|必选|描述
---|---|---|---
fn|function|是|插件函数，用于定义插件的执行逻辑

- 使用示例：

    ```javascript
    Naboo.register('animate', function (next, dom, prop, opt) {
        opt = opt || {};
        var cb = opt.cb;
        opt.cb = function () {
            cb && cb();
            next();
        };
        opt.mode = ([
            'transition'
        ].indexOf(opt.mode) > -1) ? opt.mode : 'transition';
        Naboo[opt.mode](dom, prop, opt);
    });
    ```
