{{ target: markdown-paginator }}
<div class="markdown-paginator">
  {{ if: ${last} == null }}
  <div class="markdown-paginator-item hide-in-small empty"></div>
  {{ else }}
  <a class="markdown-paginator-item" data-type="mip" href="${last.url}">
    <p class="label">上一页</p>
    <p class="title">${last.name}</p>
  </a>
  {{ /if }}
  {{ if: ${next} == null }}
  <div class="markdown-paginator-item hide-in-small empty"></div>
  {{ else }}
  <a class="markdown-paginator-item" data-type="mip" href="${next.url}">
    <p class="label">下一页</p>
    <p class="title">${next.name}</p>
  </a>
  {{ /if }}
</div>
