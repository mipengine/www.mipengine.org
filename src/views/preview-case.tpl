{{ target: preview-case }}
<!DOCTYPE html>
<html mip>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <title>测试</title>
  <meta name="description" content="">
  <link rel="canonical" href="/${url}">
  <link rel="stylesheet" type="text/css" href="https://c.mipcdn.com/static/v2/mip.css">
  ${style|raw}
</head>
<body>
  ${preset|raw}
  ${cases|raw}
  <script type="data-x-preset" id="preset">
  ${preset.replace(/</g, '___arrow_left___').replace(/>/g, '___arrow_right___')|raw}
  </script>
  <script src="https://c.mipcdn.com/static/v2/mip.js"></script>
  ${scripts|raw}
  <script>
  var preset;
  window.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== 'demo-edit') {
      return;
    }

    if (!preset) {
      preset = document.getElementById('preset').innerHTML
        .replace(/___arrow_left___/g, '<')
        .replace(/___arrow_right___/g, '>');
    }
    document.body.innerHTML = preset + e.data.html;
  })
  </script>
</body>
</html>
