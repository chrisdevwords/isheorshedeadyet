<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {% include "./social.html" %}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet'>
    <!-- build:css /public/dist/css/site.css -->
    <link href="/public/bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="/public/bower_components/html5-placeholder-polyfill/dist/placeholder_polyfill.min.css" rel="stylesheet">
    <link href="/public/build/css/main.css" rel="stylesheet">
    <!-- endbuild -->
    <!-- build:js /public/dist/js/head.js -->
    <script type="text/javascript" src="/public/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
</head>
<body>
    <div class="site-wrapper container">
        {% include "./content.html" %}
    </div>
    {% if serverVars %}
    <script>
        window.__SERVER_VARS__ = {
            name : "{{ serverVars.name }}",
            data : {%autoescape false%}{{serverVars.data|json_encode}}{%endautoescape%}
        };
    </script>
    {% endif %}
    <!-- build:js /public/dist/js/bundle.js -->
    <script type="text/javascript" src="/public/build/js/build.js"></script>
    <script type="text/javascript" src="/public/bower_components/html5-placeholder-polyfill/dist/placeholder_polyfill.jquery.min.combo.js"></script>
    <script type="text/javascript" src="/public/bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <!-- endbuild -->
</body>
</html>