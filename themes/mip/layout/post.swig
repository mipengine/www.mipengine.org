{% extends 'mip.layout.swig' %}

{% block style %}
    {{ mipcss('reset.css', 'fontawesome.css','header.css', 'markdown.css', 'mobile-nav.css', 'footer.css', 'post.css') }}
{% endblock style %}

{% block content %}
    <div class="post-content">
      <article class="post-article">
          <header class="article-header">
            <h1 class="article-title">{{ page.title }}</h1>
            <a href="{{ raw_link(page.source) }}" class="article-edit-link" title="点击编辑该页面">
                <i class="fa fa-pencil"></i>
            </a>
          </header>
          <div class="post-article-content markdown-body">
            {{ page.content }}
          </div>
      </article>
    </div>
{% endblock content %}
