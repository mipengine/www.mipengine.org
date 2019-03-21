{{ target: layout-codelab-detail(master = layout) }}

{{ block: content }}


<div class="step-tabs-wrapper">
  {{ if: ${menuInfo} != '' }}
  <div class="step-head">
    <div class="step-head-inner">
      <p class="title">${menuInfo.name}</p>
      <p class="des">${menuInfo.description}</p>
    </div>
  </div>
  {{ /if }}
  <div class="step-content-main">
    <div class="step-content-menu">
      <mip-mipengine-stepper-tabs
        m-bind:menu-steps="codelabMenu"
        m-bind:codelab-step-selected="codelabStepSelected"
      >
      </mip-mipengine-stepper-tabs>
    </div>


    <div class="step-content-wrapper">
      <div class="step-content-list">
        <div class="content-item show markdown-body">
          ${content|raw}
        </div>
        {{ use:markdown-toolbar(editLink = ${editLink}, feedbackLink=${feedbackLink}) }}
        {{ use:markdown-paginator(last = ${last}, next = ${next}) }}
      </div>
    </div>
  </div>
</div>

<mip-data>
  <script type="application/json">
    {
      "navbar": ${*navbar|json},
      "navIndex": "${navIndex}",
      "sidebarFragment": "codelabs",
      "sidebarSecondFragment": "codelabs",
      "codelabMenu": ${*menu|json},
      "codelabStepSelected": "${url}"
    }
  </script>
</mip-data>

{{ /block }}

{{ block: sidebar }}
<div class="sidebar-fragment navbar-secnav-wrapper"
  m-bind:class="{hide:sidebarFragment!=='codelabs'}"
>
  <h1 on="tap:MIP.setData({sidebarFragment:'nav'})"><span>${secondNavbarTitle}</span></h1>
  <mip-mipengine-stepper-tabs
    m-bind:menu-steps="codelabMenu"
    m-bind:codelab-step-selected="codelabStepSelected"
  ></mip-mipengine-stepper-tabs>
</div>
{{ /block }}

