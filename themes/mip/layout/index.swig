{% extends 'mip.layout.swig' %}

{% block style %}
    {{ mipcss('reset.css', 'fontawesome.css','header.css', 'markdown.css', 'mobile-nav.css', 'footer.css', 'index.css') }}
{% endblock style %}

{% block content %}
    <section class="jumbotron">
        <div class="container jumbo-padding">
            <div class="jumbo-text">
                <h1 class="jumbo-head">移动网页加速器</h1>
                <p class="jumbo-intro">
                    使用 MIP 无需等待加载
                    <br>页面内容将以更友好的方式瞬时到达用户
                </p>
                <p class="jumbo-intro">
                    <a class="jumbo-btn" href="/doc/00-mip-101.html">
                        快速入门
                    </a>
                </p>
                <p class="jumbo-intro">
                    <a class="jumbo-btn" target="_blank" href="https://github.com/mipengine/">
                        GitHub
                    </a>
                </p>
            </div>
        </div>
        <div class="index-intro-bg-wrap">
            <div class="index-intro-bg">
                <div class="container jumbo-padding">
                    <div class="index-intro-wrap">
                        <div class="index-header">
                            MIP 是什么
                        </div>
                        <div class="row index-whats-row">
                            <a data-title="MIP HTML 规范" class="col-xs-4 index-whats-border-left" href="/doc/2-tech/1-mip-html.html">
                                <span class="index-whats-img sprite-html"></span>
                                <h3 class="index-subheader">MIP HTML</h2>
                            </a>
                            <a data-title="MIP 加速原理" class="col-xs-4 index-whats-border-left" href="/doc/03-principle-of-mip.html">
                                <span class="index-whats-img sprite-js"></span>
                                <h3 class="index-subheader">MIP-JS</h2>
                            </a>
                            <a data-title="MIP-Cache 规范" class="col-xs-4 index-whats-border-left index-whats-border-right" href="/doc/2-tech/3-mip-cache.html#makedown-doc-使用方法">
                                <span class="index-whats-img sprite-cache"></span>
                                <h3 class="index-subheader">MIP-Cache</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="index-section index-widget">
        <div class="container">
            <div class="section-intro">
                <h2 class="section-intro-title">丰富灵活的内置组件</h2>
                <p class="section-intro-subtext">
                    MIP 提供实用、强大的基础组件<br>开发者可根据需求任意选择
                </p>
                <a data-title="MIP 组件概述" class="section-intro-btn" href="/doc/3-widget/10-widgets.html">
                    查看更多
                    <i class="fa fa-chevron-right"></i>
                </a>
            </div>
            <span class="section-img"></span>
        </div>
    </section>
    <section class="index-section index-tech">
        <div class="container">
            <div class="section-intro">
                <h2 class="section-intro-title">开放的接入技术</h2>
                <p class="section-intro-subtext">
                    MIP 是一项永久的开源计划<br>提供持续优化的解决方案
                </p>
                <a data-title="MIP 扩展组件开发规范" class="section-intro-btn" href="/doc/2-tech/4-mip-widget.html">
                    查看更多
                    <i class="fa fa-chevron-right"></i>
                </a>
            </div>
            <span class="section-img"></span>
        </div>
    </section>
    <section class="index-section index-rule">
        <div class="container">
            <div class="section-intro">
                <h2 class="section-intro-title">简单便捷的开发规范</h2>
                <p class="section-intro-subtext">
                    MIP 语法基于 HTML 并提供详细的示例<br>开发者仅需做简单开发
                </p>
                <a data-title="MIP HTML 规范" class="section-intro-btn" href="/doc/2-tech/1-mip-html.html">
                    查看更多
                    <i class="fa fa-chevron-right"></i>
                </a>
            </div>
            <span class="section-img"></span>

        </div>
    </section>
{% endblock content %}
