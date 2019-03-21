{{ target: markdown-toolbar }}
<div class="markdown-toolbar">
  {{ if: ${feedbackLink} }}
  <a data-type="mip" href="${feedbackLink}"><span>反馈</span></a>
  {{ /if }}

  {{ if: ${editLink} }}
  <!-- <a data-type="mip" href="${editLink}"><span>编辑</span></a> -->
  {{ /if }}
</div>
