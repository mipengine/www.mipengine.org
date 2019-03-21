{{ target: layout-doc(master = layout) }}

{{ block: content }}
<mip-fixed type="left" top="64px" class="layout-sidebar">
  <mip-mipengine-sidenav m-bind:menu="menu" m-bind:chapters="chapters" m-bind:url="url">
  </mip-mipengine-sidenav>
</mip-fixed>
<div class="layout-main-content">
  <div class="content-wrapper">
    {{ use:markdown-breadcrumb(list = ${breadcrumbs}) }}
    <div class="markdown-body">
      ${content|raw}
    </div>
    {{ use:markdown-toolbar(editLink = ${editLink}, feedbackLink=${feedbackLink}) }}
    {{ use:markdown-paginator(last = ${last}, next = ${next}) }}
  </div>
</div>
<mip-data>
  <script type="application/json">
    {
      "navbar": ${*navbar|json},
      "navIndex": "${navIndex}",
      "sidebarFragment": "guide",
      "sidebarSecondFragment": "guide",
      "menu": ${*menu|json},
      "chapters": ${*chapters|json},
      'url': "${url}"
    }
  </script>
</mip-data>
{{ /block }}

{{ block: sidebar }}
<div class="sidebar-fragment navbar-secnav-wrapper"
  m-bind:class="{hide:sidebarFragment!=='guide'}"
>
  <h1 on="tap:MIP.setData({sidebarFragment:'nav'})"><span>${secondNavbarTitle}</span></h1>
  <mip-mipengine-sidenav m-bind:menu="menu" m-bind:chapters="chapters" m-bind:url="url" on="clicked:nav-sidebar.close"></mip-mipengine-sidenav>
</div>
{{ /block }}
