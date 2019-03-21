{{ target: layout-navbar }}
<mip-fixed type="top" class="layout-navbar-fixed">
  <div class="layout-navbar">
    <a data-type="mip" href="/"><div class="navbar-logo"></div></a>
    <div class="navbar-menu">
      <ul class="navbar-menu-wrapper">
      {{ for: ${navbar} as ${item}, ${index} }}
        {{ if: ${item.children} }}
        <li {{ if: parseInt(${navIndex}, 10) == ${index} }}class="navbar-item active"{{ else }}class="navbar-item"{{ /if }}>
          <span class="menu-name" title="{{ if: ${item.aliasName} != null }}${item.aliasName}{{ else }}${item.name}{{ /if }}">{{ if: ${item.aliasName} != null }}${item.aliasName}{{ else }}${item.name}{{ /if }}<i class="arrow"></i></span>
          <ul class="navbar-sub-menu">
            {{ for: ${item.children} as ${subItem} }}
            <li class="navbar-sub-item"><a {{ if: ${item.blank} }}target="_blank"{{ else }}data-type="mip"{{ /if }} href="${subItem.url}" title="${subItem.name}">${subItem.name}</a></li>
            {{ /for }}
          </ul>
        </li>
        {{ else }}
        <li {{ if: parseInt(${navIndex}, 10) == ${index} }}class="navbar-item active"{{ else }}class="navbar-item" {{ /if }}><a {{ if: ${item.blank} }}target="_blank"{{ else }}data-type="mip"{{ /if }} href="${item.url}" class="menu-name" title="{{ if: ${item.aliasName} != null }}${item.aliasName}{{ else }}${item.name}{{ /if }}">{{ if: ${item.aliasName} != null }}${item.aliasName}{{ else }}${item.name}{{ /if }}</a></li>
        {{ /if }}
      {{ /for }}
      </ul>
      <div class="navbar-indicator" m-bind:style="navbarStyle"></div>
    </div>
    <div class="navbar-toggle" on="tap:nav-sidebar.open"><i class="iconfont icon-bars"></i></div>
  </div>
</mip-fixed>
