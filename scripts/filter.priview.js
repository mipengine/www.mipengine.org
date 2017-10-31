/**
 * @file 处理组件的预览
 * @description 判断文档可预览时在 `<pre>` 产插入预览按钮
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* global hexo */

'use strict';

hexo.extend.filter.register('after_post_render', data => {
    // 如果没有组件配置，或者不需要预览
    if (!data.setting || !data.setting.preview) {
        return data;
    }

    // 如果没有可预览代码
    if (data.content.indexOf('<pre><code class="hljs lang-html">') === -1) {
        return data;
    }

    data.content = data.content.replace(/<pre><code class="hljs lang-html">([\s\S]+?)<\/code><\/pre>/g, match => {
        return `<mip-mipengine-preview-v2 class="mip-preview-btn">预览</mip-mipengine-preview-v2>${match}`;
    });

    return data;
}, 8);
