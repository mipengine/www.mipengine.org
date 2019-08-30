{{ target: layout }}
<!DOCTYPE html>
<html mip>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${url}">
    <link rel="stylesheet" type="text/css" href="https://c.mipcdn.com/static/v2/mip.css">
    <link rel="icon" href="https://www.mipengine.org/favicon.ico">
    <!-- <link rel="stylesheet" href="https://bos.nj.bpc.baidu.com/assets/mip/projects/mip.css"> -->
    <!-- <link rel="stylesheet" href="http://172.18.19.102:8080/dist/mip.css"> -->
    <style mip-custom>
      ${css|raw}
    </style>
  </head>
  <body>
    {{ use:layout-navbar(navbar = ${navbar}, navIndex = ${navIndex}) }}

    <mip-sidebar
      id="nav-sidebar"
      layout="nodisplay"
      side="right"
      class="mip-hidden nav-sidebar"
      on="close:MIP.setData({sidebarFragment:m.sidebarSecondFragment})"
    >
      {{ use:layout-sidebar-nav(navbar = ${navbar}, navIndex = ${navIndex}) }}
      {{ block: sidebar }}{{ /block }}
    </mip-sidebar>

    {{ block: content }}{{ /block }}

    <!-- <script src="http://172.18.19.102:8080/dist/mip.js"></script> -->
    <script src="https://c.mipcdn.com/static/v2/mip.js"></script>
    <!-- <script src="http://172.18.19.96:8060/byurl?mip-extensions=mip-sidebar/mip-sidebar,mip-showmore/mip-showmore&mip2-extensions=mip-accordion/mip-accordion"></script> -->
    <script src="https://c.mipcdn.com/static/v2/mip-sidebar/mip-sidebar.js"></script>
    <!-- <script src="https://bos.nj.bpc.baidu.com/assets/mip/projects/mip.js"></script> -->
<!--     <script src="http://127.0.0.1:8111/mip-sidenav/mip-sidenav.js"></script> -->
    <!-- <script src="https://bos.nj.bpc.baidu.com/assets/mip/temp/mip-sidenav.js?v=194253"></script> -->
    <script src="https://c.mipcdn.com/static/v2/mipengine.org/mip-mipengine-sidenav/mip-mipengine-sidenav.js"></script>
    <script src="https://c.mipcdn.com/static/v2/mipengine.org/mip-mipengine-stepper-tabs/mip-mipengine-stepper-tabs.js"></script>
<!--     <script src="http://127.0.0.1:8111/mip-stepper-tabs/mip-stepper-tabs.js"></script> -->
    <!-- <script src="https://c.mipcdn.com/static/v1/mip-fixed/mip-fixed.js"></script> -->
    <!-- <script src="https://c.mipcdn.com/static/v2/mip-fastclick/mip-fastclick.js"></script> -->
    <!-- <script src="https://c.mipcdn.com/static/v2/mip-showmore/mip-showmore.js"></script> -->
    <!-- <script src="https://c.mipcdn.com/static/v2/mip-accordion/mip-accordion.js"></script> -->
  </body>
</html>
