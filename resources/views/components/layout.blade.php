<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="/vendor/webmixx/css/webmixx.css">
    <title>Webmixx</title>
</head>
<body>
    <div class="container @if(isset($withoutVue) && $withoutVue === true) no-vue @endif" id="app">
        <x-webmixx::menu />

        {!! $slot !!}
    </div>
    <script src="/vendor/webmixx/js/manifest.js" defer></script>
    <script src="/vendor/webmixx/js/vendor.js" defer></script>
    <script src="/vendor/webmixx/js/webmixx.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script defer src="https://cdn.ckeditor.com/ckeditor5/24.0.0/classic/ckeditor.js" crossorigin="anonymous"></script>
</body>
</html>
