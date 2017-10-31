{% extends 'mip.layout.swig' %}

{% block title %}
    <title>MIP 文档_{{ config.title }}{% if page.title %} | {{ page.title }}{% endif %}</title>
{% endblock title %}

{% block style %}
    {{ mipcss('reset.css', 'fontawesome.css','header.css', 'markdown.css', 'mobile-nav.css', 'footer.css', 'doc.css') }}
{% endblock style %}

{% block content %}
    <div class="doc-content">
        <div class="doc-content-inner">
          <article class="doc-article">
              <header class="article-header">
                <h1 class="article-title">{{ page.title }}</h1>
                <a href="{{ raw_link(page.source) }}" class="article-edit-link" title="点击编辑该页面">
                    <i class="fa fa-pencil"></i>
                </a>
              </header>
              <div class="doc-article-content markdown-body">
                {{ page.content }}
              </div>
              <footer class="article-footer">
                <time datetime="{{ date_xml(page.updated) }}">最后更新于 {{ date(page.updated) }}</time>
              </footer>
          </article>
          <aside class="doc-left-sidebar">
              <div class="doc-left-sidebar-inner">
                {{ sidebar() }}
              </div>
          </aside>
        </div>
    </div>
{% endblock content %}
