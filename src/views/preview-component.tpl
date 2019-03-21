{{ target: preview-component }}
<div class="md-component-preview-wrapper">
  <div class="md-component-preview">${cases|raw}</div>
  <div class="md-component-code-wrapper">
    <div class="md-component-code-box">${codes|raw}</div>
  </div>
</div>
<div class="md-component-toolbar">
  <a href="${caseUrl}" class="md-component-link" target="_blank">查看例子</a>
  {{ if: ${editUrl} }}
  <a class="md-component-link md-component-link-edit" href="${editUrl}" target="_blank">编辑示例</a>
  {{ /if }}
</div>
