title: 完整 DEMO
layout: doc
---

## 一个完整的例子

``` html
<!DOCTYPE html>
<html mip>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://mipcache.bdstatic.com/static/v1/mip.css">
	    <!--TODO: canonical href需要替换成原页面url-->
        <link rel="canonical" href="https://m.baidu.com/demo.html">
        <title>Hello World</title>
        <style mip-custom>
            body{margin:10px;}
            .red-text { color: red;}
            .middle-text { text-align: center;}
            .small-pic { max-width: 200px;}
        </style>
    </head>
    <body>
        <!--自定义样式-->
        <p class="red-text">MIP页支持修改css样式</p>
        <p class="middle-text">我是居中的文字</p>
        <hr>
        <!--图片组件-->
        <p class="middle-text">&lt;mip-img&gt; 图片组件</p>
        <div class="small-pic">
            <mip-img layout="responsive" width="350" height="263" src="https://www.mipengine.org/static/img/mip_logo_3b722d7.png">
                <p>图片说明文字</p>
            </mip-img>
        </div>
        <hr>
        <!--分享组件-->
        <p class="middle-text">&lt;mip-share&gt; 分享组件</p>
        <mip-share title="分享：我的第一个MIP页面"></mip-share>
        <hr>
        <!--百度统计组件 TODO: 修改token值-->
        <p class="middle-text">&lt;mip-stats-baidu&gt; 百度统计组件，代码可见</p>
        <mip-stats-baidu token="4e397f684261b9e4ff9d8"></mip-stats-baidu>
        <!--mip 运行环境-->
        <script src="https://mipcache.bdstatic.com/static/v1/mip.js"></script>
        <!--分享组件 代码-->
        <script src="https://mipcache.bdstatic.com/static/v1/mip-share/mip-share.js"></script>
        <!--百度统计组件 代码-->
        <script src="https://mipcache.bdstatic.com/static/v1/mip-stats-baidu/mip-stats-baidu.js"></script>
    </body>
</html>
```
