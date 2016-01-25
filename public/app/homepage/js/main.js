require.config({
    waitSeconds: 0,
    paths: {
        "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "/assets/metronic/global/plugins/jquery.min"],
        "jquery-ui": ["//ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/jquery-ui.min", "/assets/metronic/global/plugins/jquery-ui/jquery-ui.min"],
        "jQueryRotate": "/assets/homeScroll/jQueryRotate",
        "superscrollorama": "/assets/homeScroll/jquery.superscrollorama",
        "TweenMax": "/assets/homeScroll/TweenMax.min",
        "async": "/assets/requirejs/async",
        "smoothScroll": "/assets/homeScroll/smoothscroll"
    },
    shim: {
        'jquery-ui': { deps: ['jquery']},
        'jQueryRotate': { deps: ['jquery'], exports: '$.fn.rotate' },
        'superscrollorama': { deps: ['jquery', 'TweenMax'], exports: '$.fn.superscrollorama' }
    }
});

require(['/build/homepage/js/index.js'],function (controller) {
    controller.initial();
});

