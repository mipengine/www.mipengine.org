{{ target: layout-codelab(master = layout) }}

{{ block: content }}
<!-- lab-item 标题和文案的溢出省略 -->
<div class="codelab-list-wrapper">

  <div class="codelab-list-head">
    <div class="head-text">
      <span class="welcom">欢迎来到 Codelab ！</span>
      <p>我们在 Codelab 中提供了一系列基于 MIP 的编程小项目，内容包括项目起步、配置教学、功能实现等等</p>
    </div>
  </div>

  <div class="codelab-list-main">
    <div class="main-inner-wrapper">
      {{ for: ${menu} as ${item} }}
      <a data-type="mip" data-title="目标页面标题" href="${item.children[0].url}">
        <div class="lab-item">
          <div class="codelab-name-wrapper">
            <div class="codelab-name">${item.info.name}</div>
            <p class="codelab-release-time">学习时间：${item.info.duration}</p>
          </div>
          <div class="codelab-desc">${item.info.description}</div>
          <div class="more-detail">
            详情
          </div>
        </div>
      </a>
      {{ /for }}
    </div>
  </div>
</div>

<mip-data>
  <script type="application/json">
    {
      "navbar": ${*navbar|json},
      "navIndex": "${navIndex}",
      "sidebarFragment": "nav",
      "sidebarSecondFragment": "nav",
      "codelabStepSelected": "${url}",
      "menu": ${*menu|json}
    }
  </script>
</mip-data>

{{ /block }}
