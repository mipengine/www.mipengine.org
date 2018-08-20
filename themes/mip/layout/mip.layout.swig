<!DOCTYPE html>
{% block mipHtml %}
<html lang="{{ page.lang }}" mip>
{% endblock mipHtml %}
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    {% block title %}
        <title>{% if page.title %}{{ page.title }}_{% endif %}{{ config.title }}</title>
    {% endblock title %}
    {% block description %}
        {% if page.description or page.description !== false %}
            <meta name="description" content="{{ page.description || config.description }}">
        {% endif %}
    {% endblock description %}
    {% block keywords %}
        {% if page.keywords or page.keywords !== false %}
            <meta name="keywords" content="{{ page.keywords || config.keywords }}">
        {% endif %}
    {% endblock keywords %}
    <meta name="baidu-site-verification" content="P4Uj0PXQrc" />
    {{ mipcanonical(page) }}
    <link rel="stylesheet" href="https://c.mipcdn.com/static/v2/mip.css">
    <link rel=icon href="https://www.mipengine.org/favicon.ico">
    {% block style %}
    {% endblock style %}
    <noscript>
        <style mip-officialrelease>
            body {
                -webkit-animation: none;
                   -moz-animation: none;
                    -ms-animation: none;
                        animation: none;
            }
        </style>
    </noscript>
</head>
<body class="layout-{{ page.layout }}">
    {{ partial('partial/header') }}

    {% block content %}
    {% endblock content %}

    {{ partial('partial/mobile-nav') }}
    {{ partial('partial/footer') }}

    {% block footer_after %}
    {% endblock footer_after %}
</body>
</html>
