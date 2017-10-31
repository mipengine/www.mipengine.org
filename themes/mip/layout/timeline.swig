{% extends 'mip.layout.swig' %}

{% block style %}
    {{ mipcss('reset.css', 'fontawesome.css','header.css', 'markdown.css', 'mobile-nav.css', 'footer.css', 'timeline.css') }}
{% endblock style %}

{% block content %}
    <div class="timeline-content">
        <mip-filter
            mip-filter-filterWrap=".timeline-left-sidebar-inner"
            mip-filter-itemWrap=".timeline-article-content"
            mip-filter-filterText="筛选："
            class="timeline-content-inner">
            <aside class="timeline-left-sidebar">
                <div class="timeline-left-sidebar-inner">
                    <div class="filter-result"></div>
                    <ul class="filter-list">{{ timeline_nav() }}</ul>
                </div>
            </aside>
            <article class="timeline-article">
                <div class="timeline-article-content">{{ timeline_item() }}</div>
            </article>
        </mip-filter>
    </div>
{% endblock content %}

{% block footer_after %}
    <script src="https://mipcache.bdstatic.com/static/v1/mip-filter/mip-filter.js"></script>
{% endblock footer_after %}
