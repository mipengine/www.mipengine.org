<mip-sidebar
    id='right-sidebar'
    layout="nodisplay"
    class="mip-hidden"
    side="right"
>
  <div class="right-sidebar-nav">
    {{ nav('mobile') }}
  </div>

  {% if page.layout == 'doc' %}
    <div class="right-sidebar-doc">
      {{ sidebar() }}
    </div>
  {% endif %}
</mip-sidebar>
