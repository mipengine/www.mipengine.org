{% extends 'nomip.layout.swig' %}

{% block style %}
    {{ mipcss('reset.css', 'fontawesome.css','header.css', 'markdown.css', 'mobile-nav.css', 'footer.css', 'mippath.css') }}
{% endblock style %}

{% block content %}
    <div class="mippath-content">
      <article class="mippath-article">
          <header class="article-header">
            <h1 class="article-title">{{ page.title }}</h1>
          </header>
          <div class="mippath-article-content">
            <h3>MIP页URL、MIP-CacheURL、百度结果页URL转换</h3>
            <p class="mippath-tip">请输入页面地址。当输入为空时，直接转换默认网址</p>

            <div class="mippath-text">
                <textarea placeholder="https://m.baidu.com/mip/c/www.mipengine.org/index.html"></textarea>
            </div>

            <div class="mippath-result"></div>
          </div>
      </article>
    </div>
{% endblock content %}

{% block footer_after %}
<script>
    (function () {
        var input = document.querySelector('.mippath-text textarea');
        var $result = document.querySelector('.mippath-result');

        /**
         * 显示结果
         *
         * @param  {Object} data 数据
         */
        var showResult = function (data) {
            var html = '';

            if (data.error) {
                html = $result.innerHTML = '<p class="error">' + data.error + '</p>';
            }
            else {
                if (data.type) {
                    html += '<p>您输入的链接类型为：' + data.type + '</p>';
                }

                if (data.mipUrl) {
                    html += '<p><span>MIP页:</span>' + data.mipUrl + '</p>';
                }

                if (data.cacheUrl) {
                    html += '<p><span>Cache页:</span>' + data.cacheUrl + '</p>';
                }

                if (data.baiduUrl) {
                    html += '<p><span>百度结果页:</span>' + data.baiduUrl + '</p>';
                }
            }

            $result.innerHTML = html;
        };

        /**
         * 文本处理
         */
        var onChange = function () {
            var text = input.value.trim() || input.placeholder;

            if (!/^http(s)?:\/\//.test(text)) {
                showResult({
                    error: '您输入的url没有http/https协议头，请重新输入。'
                });
            }
            else {
                showResult(processUrl(text));
            }
        };

        input.addEventListener('input', onChange);
        input.addEventListener('paste', function () {
            input.value = '';
        });
        input.addEventListener('keydown', function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode === 13) {
                event.preventDefault();
                onChange();
            }
        });

        /**
         * 分割Url
         * @param  {String} url 用户输入的Url
         * @return {Object}     包含cache-url, baidu-url, mip-url, isHttps信息的对象
         */
        function processUrl(url) {
            var obj = {
                type: '',
                mipUrl: '',
                cacheUrl: '',
                baiduUrl: '',
                mainUrl: '',
                isHttps: false
            };
            var Cache_prefix = 'https://c.mipcdn.com/c/';
            var Baidu_prefix = 'https://m.baidu.com/mip/c/';
            var reg;
            var regResult;

            if (url.indexOf(Cache_prefix) == 0) {
                // eg. https://c.mipcdn.com/c/s/m.meishij.net/html5/mip/zuofa/huangmenji_9.html
                obj.type = 'MIP-Cache Url';
                reg = new RegExp(Cache_prefix + '(s/)?(\\S+)');
            }
            else if (url.indexOf(Baidu_prefix) == 0) {
                // eg. https://m.baidu.com/mip/c/s/m.meishij.net/html5/mip/zuofa/huangmenji_9.html
                obj.type = 'Baidu Url';
                reg = new RegExp(Baidu_prefix + '(s/)?(\\S+)');
            }
            else {
                // eg. https://m.meishij.net/html5/mip/zuofa/huangmenji_9.html
                obj.type = 'MIP Url';
                reg = new RegExp('http(s)?://(\\S+)');
            }
            regResult = reg.exec(url);
            if (!regResult) return false;
            if (regResult[1]) {
                obj.isHttps = true;
            }
            obj.mainUrl = decodeRestfulUrl(regResult[2]);
            obj.mipUrl = 'http' + (obj.isHttps ? 's' : '') + '://' + '<strong>' + obj.mainUrl + '</strong>';
            obj.cacheUrl = Cache_prefix + (obj.isHttps ? 's/' : '') + '<strong>' + obj.mainUrl + '</strong>';
            obj.baiduUrl = Baidu_prefix + (obj.isHttps ? 's/' : '') + '<strong>' + encodeRestfulUrl(obj.mainUrl) + '</strong>';
            return obj;
        }

        function encodeRestfulUrl(url) {
            var restful = encodeURIComponent(url);
            restful = restful.replace(/%2F/g, '/');
            for (var i = 0; i < restful.length; i++) {
                var char = restful.charAt(i);
                var nextChar = restful.charAt(i + 1);
                if (char === '/' && nextChar !== '/') {
                    continue;
                }
                while (restful.charAt(i) === '/' && i < restful.length) {
                    restful = restful.slice(0, i) + '%2F' + restful.slice(i + 1);
                    i += 3;
                }
            }
            return restful;
        }

        function decodeRestfulUrl(url) {
            var u = url.replace(new RegExp('/', 'g'), '%2F');
            return decodeURIComponent(u);
        }
    })();

</script>
{% endblock footer_after %}
