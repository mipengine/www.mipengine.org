{{ target: preview-edit }}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>测试</title>
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="https://c.mipcdn.com/static/v2/mip.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/codemirror/5.38.0/codemirror.min.css">
    {{ if: ${development} }}
    <link rel="stylesheet" type="text/css" href="/src/style/dist/preview-edit.css">
    {{ else }}
    <style>${css|raw}</style>
    {{ /if }}
  </head>
  <body>
    {{ use:layout-navbar(navbar = ${navbar}, navIndex = ${navIndex}) }}
    <div class="edit-content">
      <div class="edit-toolbar">
        <a class="toolbar-button" href="${docUrl}">返回文档</a>
      </div>
      <div class="edit-wrapper">
        <div class="edit-iframe-wrapper">
<!--           <p class="edit-tip">查看结果：</p> -->
          <iframe id="edit-iframe" frameborder="0" width="320" height="568" src="/${url}"></iframe>
        </div>
        <div class="edit-code">
          <!-- <p class="edit-tip">编辑您的代码：</p> -->
          <textarea id="code" name="code">${cases|raw}</textarea>
        </div>
      </div>
    </div>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/codemirror.min.js"></script>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/mode/javascript/javascript.min.js"></script>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/mode/xml/xml.min.js"></script>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/mode/css/css.min.js"></script>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/mode/htmlmixed/htmlmixed.min.js"></script>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/addon/selection/active-line.min.js"></script>
    <script src="https://cdn.bootcss.com/codemirror/5.38.0/addon/edit/matchbrackets.min.js"></script>
    <script>
       var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'htmlmixed',
        identUnit: 2
      });
      editor.setOption("theme", 'default');
      var iframe = document.getElementById('edit-iframe');

      var timer;
      function throttle (fn) {
        if (timer != null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          timer = null;
          fn();
        }, 500);
      }

      editor.on('change', function () {
        throttle(function () {
          let val = editor.getValue();
          try {
            iframe.contentWindow.postMessage({type: 'demo-edit', html: val}, '*');
          } catch (e) {
            console.error('post fail');
          }
        });
      });
    </script>
  </body>
</html>
