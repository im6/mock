require.config({
    waitSeconds: 0,
    paths: {
        "jquery": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
            "/assets/home/jquery.min"
        ],
        "jquery-ui": [
            "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min",
            "/assets/home/jquery-ui.min"
        ],
        "jQueryRotate": "/assets/home/jQueryRotate",
        "superscrollorama": "/assets/home/jquery.superscrollorama",
        "TweenMax": "/assets/home/TweenMax.min",
        "async": "/assets/home/requirejs/async",
        "smoothScroll": "/assets/home/smoothscroll"
    },
    shim: {
        'jquery-ui': { deps: ['jquery']},
        'jQueryRotate': { deps: ['jquery'], exports: '$.fn.rotate' },
        'superscrollorama': { deps: ['jquery', 'TweenMax'], exports: '$.fn.superscrollorama' }
    }
});

require(['/build/homepage/js/index.js','smoothScroll'],function (controller) {
    controller.initial();
});