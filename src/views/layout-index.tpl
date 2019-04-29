{{ target: layout-index(master = layout) }}

{{ block: content }}
<div class="home-wrapper">
    <!-- banner -->
    <section class="top-section">
        <div class="container">
            <div class="top-text">
                <h1>移动网页加速器</h1>
                <p>使用 MIP 无需等待加载</br>页面内容将以更友好的方式瞬时到达用户</p>
                <div class="top-buttons">
                    <a class="top-btn-start" data-type="mip" href="${host}/v2/docs/getting-start/newbie.html">快速入门</a>
                    <a class="top-btn-github" data-type="mip" href="https://github.com/mipengine/mip2">GitHub</a>
                </div>
            </div>
        </div>
    </section>
    <section class="intro-section">
        <div class="container">
            <h1>MIP 是什么</h1>
            <p>WHAT IS MOBILE INSTANT PAGES</p>
            <div class="mip-parts">
                <a data-type="mip" class="mip-parts-html" href="${host}/v2/docs/mip-standard/mip-html-spec.html">
                    <h2>MIP-HTML</h2>
                    <p>通过 MIP-HTML 规范限制 HTML 以达到提升页面性能的效果</p>
                </a>
                <a data-type="mip" class="mip-parts-js" href="${host}/v2/about/how-mip-works.html">
                    <h2>MIP-JS</h2>
                    <p>精心设计的组件核心 JS 确保快速渲染 MIP-HTML 网页</p>
                </a>
                <a data-type="mip" class="mip-parts-cache" href="${host}/v2/docs/mip-standard/mip-cache-spec.html">
                    <h2>MIP-CACHE</h2>
                    <p>给所有符合 MIP-HTML 规范的网页提供 CDN 缓存服务，主动提高页面加载速度</p>
                </a>
            </div>
        </div>
    </section>
    <section class="advantage-section">
        <div class="container">
            <h1>MIP 的优势</h1>
            <p>THE ADVANTAGES OF MOBILE INSTANT PAGES</p>
            <div class="mip-advantages">
                <div class="mip-advan-section">
                    <div>
                        <h2>丰富灵活的内置组件</h2>
                        <p>MIP 提供实用、强大的基础组件<br/>开发者可以根据需求任意选择</p>
                        <a class="mip-advan-section-button" data-type="mip" href="${host}/v2/components/index.html">查看详情<i class="arrow"></i></a>
                        <div class="mip-advan-section-img advan-1"></div>
                    </div>
                    <div>
                        <h2>开放的接入技术</h2>
                        <p>MIP 是一项永久的开源计划<br/>提供持续优化的解决方案</p>
                        <a class="mip-advan-section-button" data-type="mip" href="${host}/v2/contribute/getting-start/component-spec.html">查看详情<i class="arrow"></i></a>
                        <div class="mip-advan-section-img advan-2"></div>
                    </div>
                </div>
                <div class="mip-advan-section">
                    <div>
                        <h2>更好的整站体验</h2>
                        <p>更流畅的页面切换体验<br/>天然的站点离线缓存支持</p>
                        <a class="mip-advan-section-button" data-type="mip" href="${host}/v2/docs/all-sites-mip/introduction.html">查看详情<i class="arrow"></i></a>
                        <div class="mip-advan-section-img advan-3"></div>
                    </div>
                    <div>
                        <h2>简单便捷的开发规范</h2>
                        <p>提供 MVVM 机制降低组件开发难度<br/>提供更为简单高效的组件互动方式</p>
                        <a class="mip-advan-section-button" data-type="mip" href="${host}/v2/contribute/development/component-syntax.html">查看详情<i class="arrow"></i></a>
                        <div class="mip-advan-section-img advan-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="footer-section">
        <div class="container">
            <div class="pc">
                <div>
                    <h2>使用文档</h2>
                    <a data-type="mip" href="${host}/v2/about/what-is-mip.html">简介</a>
                    <a data-type="mip" href="${host}/v2/docs/mip-standard/mip-html-spec.html">开发规范</a>
                    <a data-type="mip" href="${host}/v2/components/index.html">组件说明</a>
                    <a data-type="mip" href="${host}/v2/api/index.html">工具接口</a>
                    <!-- <a data-type="mip" href="#">帮助中心</a> -->
                    <!-- <a data-type="mip" href="#">成功案例</a> -->
                </div>
                <div>
                    <h2>组件列表</h2>
                    <a data-type="mip" href="${host}/v2/components/index.html#布局">布局组件</a>
                    <a data-type="mip" href="${host}/v2/components/index.html#呈现">呈现组件</a>
                    <a data-type="mip" href="${host}/v2/components/index.html#多媒体">多媒体组件</a>
                    <a data-type="mip" href="${host}/v2/components/index.html#动态内容">动态内容组件</a>
                    <a data-type="mip" href="${host}/v2/components/index.html#广告">广告组件</a>
                </div>
                <div>
                    <h2>常用链接</h2>
                    <!-- <a data-type="mip" href="#">MIP 官方博客</a> -->
                    <!-- <a href="https://github.com/mipengine/mip2/tree/master/packages/mip-cli">MIP-CLI 本地开发工具</a> -->
                    <!-- <a data-type="mip" href="#">MIP 升级动态</a> -->
                    <a data-type="mip" href="https://www.mipengine.org/validator/validate">MIP 代码校验工具</a>
                    <a data-type="mip" href="https://www.mipengine.org/validator/preview">MIP 效果预览工具</a>
                    <a data-type="mip" href="https://www.mipengine.org/mippath.html">MIP PATH 转换工具</a>
                    <a data-type="mip" href="https://www.mipengine.org/platform/mip">MIP 组件审核平台</a>
                </div>
                <div>
                    <h2>联系我们</h2>
                    <a href="https://github.com/mipengine/mip2">GitHub</a>
                    <a href="mailto:mip-support@baidu.com">mip-support@baidu.com</a>
                    <a href="#" class="qr-code"></a>
                    <a data-type="mip" href="#">扫码加入 QQ 群：</a>
                    <a data-type="mip" href="#">580967494</a>
                </div>
            </div>
            <div class="mobile">
                <div>
                    <a href="#" class="qr-code"></a>
                    <a href="#">扫码加入 QQ 群</a>
                    <a data-type="mip" href="#">580967494</a>
                    <div class="mobile-contact">
                        联系我们:
                        <a href="https://github.com/mipengine/mip2">GitHub</a>
                        <a href="mailto:mip-support@baidu.com">mip-support@baidu.com</a>
                    </div>
                </div>
            </div>
        </div>
        <p>@2019 mipengine</p>
    </section>

</div>

<mip-data>
  <script type="application/json">
    {
      "navbar": ${*navbar|json},
      "navIndex": "${navIndex|raw}",
      "sidebarFragment": "nav",
      "sidebarSecondFragment": "nav"
    }
  </script>
</mip-data>
{{ /block }}
