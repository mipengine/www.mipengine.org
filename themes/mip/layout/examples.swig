{% extends 'mip.layout.swig' %}

{% block title %}
    <title>{{ page.setting.name }}文档示例 | MIP官网(Mobile Instant Pages)</title>
{% endblock title %}

{% block style %}
    {{ mipcss('reset.css', 'fontawesome.css','header.css', 'markdown.css', 'mobile-nav.css', 'footer.css', 'examples.css') }}
{% endblock style %}

{% block content %}
    <div class="examples-content">
        <div class="examples-content-inner">
          <article class="examples-article">
              <header class="article-header">
                <h1 class="article-title">{{ page.title }}</h1>
                <a href="{{ raw_link(page.source) }}" class="article-edit-link" title="点击编辑该页面">
                    <i class="fa fa-pencil"></i>编辑
                </a>
              </header>
              <div class="examples-article-content markdown-body">
                {{ page.content }}
              </div>
              <footer class="article-footer">
                <time datetime="{{ date_xml(page.updated) }}">最后同步于 {{ date(page.updated) }}</time>
              </footer>
          </article>
          <aside class="examples-left-sidebar">
            <mip-semi-fixed>
                <div mip-semi-fixed-container>
                {{ toc(page.content, {class: 'examples-doc', list_number: false}) }}
                </div>
            </mip-semi-fixed>
          </aside>
        </div>
    </div>
{% endblock content %}

{% block footer_after %}
    <script src="https://mipcache.bdstatic.com/static/v1/mip-semi-fixed/mip-semi-fixed.js"></script>
    {% if page.setting and page.setting.preview %}
        <div id="example-lightbox">
            <button role="button" class="close-btn"></button>
            <div class="iphone"></div>
        </div>

        <script type="application/json" id="mip-components-config">
            {{ page.setting | json }}
        </script>
        <script src="https://mipcache.bdstatic.com/extensions/platform/v1/mip-mipengine-preview-v2/mip-mipengine-preview-v2.js"></script>
    {% endif %}
{% endblock footer_after %}
