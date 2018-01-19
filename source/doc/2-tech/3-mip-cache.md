title: MIP-Cache 规范
layout: doc
---

百度 MIP-Cache 给所有符合规范的 MIP 页面提供 cache 服务，能够主动的提高页面加载速度，为使用 MIP-Cache 服务的页面上的图片、CSS 文件等资源提供缓存服务，这样能做到所有 HTTP 请求来自于同源，能够加速加载速度。

缓存后的页面都是 https 的，安全性更高。

## 使用方法

[info] 在开发页面时，无需对 MIP-Cache 进行额外关注，只要保证 MIP 页面、图片等资源是允许 MIP cache 的 UA（baidumip, baidumib）抓取即可。

MIP-Cache 完整 UA 为：`Mozilla/5.0 (Linux;u;Android 4.2.2;zh-cn;) AppleWebKit/534.46 (KHTML,like Gecko) Version/5.1 Mobile Safari/10600.6.3 (compatible; baidumib;mip; + https://www.mipengine.org)`

在引用图片等静态资源时，无论是否支持 https，直接引用本站服务器上的图片即可。如使用：`<mip-img src="http://www.baidu.com/logo.png">`。

## MIP-Cache 生效流程

在 MIP 页被爬虫抓取后，会自动对静态资源的进行缓存，并且替换页面中的静态资源引用地址为缓存地址。搜索结果页会优先跳转到 MIP-Cache URL MIP-Cache 缓存到期时进行一次回源，访问原页面 URL 并重新缓存。

## MIP-Cache 的 URL 规则

url 规则和下列情况有关：

	内容类型：图片、MIP 页面等，图片使用 '/i'，其他使用 '/c'

	协议类型：使用 TLS，https 的增加 '/s'，http 的不加

例如：

1、网页地址或 CSS、Javascript

https 资源：

	originalUrl：https://www.mipengine.org/

	cdnMipUrl：https://www-mipengine-org.mipcdn.com/c/s/www.mipengine.org

http 资源：

	originalUrl：http://m.example.com/

	cdnMipUrl：https://m-example-com.mipcdn.com/c/m.example.com

2、图片

https 资源：

	originalUrl：https://www.mipengine.org/static/img/banner_wise_3f04050.jpg

	cdnMipUrl：https://www-mipengine-org.mipcdn.com/i/s/www.mipengine.org/static/img/banner_wise_3f04050.jpg

http 资源：

	originalUrl：http://www.sinaimg.cn/dy/slidenews/a.jpg

	cdnMipUrl：https://www-sinaimg-cn.mipcdn.com/i/www.sinaimg.cn/dy/slidenews/a.jpg

## 页面编码要求

[warning] 强制使用 UTF-8 编码

## MIP-Cache 更新机制

### MIP-Cache 常规更新机制

MIP-Cache 常规更新机制也是页面最常规，最常用的更新机制。各种类型的资源更新策略为：

- 页面的缓存时间为52分钟-5天（由该页面用户点击量和站点本身稳定性决定）。
- 图片缓存时间为10天。
- MIP-JS 组件文件的缓存时间为10分钟。

在当前文件过期后，MIP-Cache 会重新抓取资源。如果是 HTML 页面，MIP-Cache 还会对页面文件进行 [MIP 规范校验](https://www.mipengine.org/validator/preview)。如果此时页面内容不再符合 [MIP 规范](https://www.mipengine.org/doc/2-tech/2-validate-mip.html)，MIP-Cache 就不再缓存这个页面了。这样，所有 MIP-Cache 中的页面都是最新的，并且符合 MIP 规范。  

### MIP-Cache 快速更新机制

考虑到一些特殊情况，需要尽快更新 MIP-Cache 中的页面。比如线上 BUG 紧急修复、发现网页有黄反等需要紧急更新或者删除的内容时，MIP-Cache 也开放了单独的清理接口，阅读 [MIP-cache 清理](http://zhanzhang.baidu.com/mip/index) 了解更多信息。生效时间大概 **5min**。

### MIP-Cache 页面删除

如果有一些废弃页面需要删除：

- 站长首先删除本站原页面
- 调用 MIP-Cache 快速更新机制删除 Cache
- 删除后，请给 MIP-Cache 非 200（404 或者其他）状态码，防止 cache 中缓存错误页。
