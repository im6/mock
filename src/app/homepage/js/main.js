require.config({
    waitSeconds: 0,
    baseUrl: 'build/home/js/',
    paths: {
        "jquery": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
            "jquery.min"
        ],
        "jquery-ui": [
            "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min",
            "jquery-ui.min"
        ],
        "jQueryRotate": "jQueryRotate",
        "superscrollorama": "jquery.superscrollorama",
        "TweenMax": "TweenMax.min",
        "async": "requirejs/async",
        "smoothScroll": "smoothscroll"
    },
    shim: {
        'jquery-ui': { deps: ['jquery']},
        'jQueryRotate': { deps: ['jquery'], exports: '$.fn.rotate' },
        'superscrollorama': { deps: ['jquery', 'TweenMax'], exports: '$.fn.superscrollorama' }
    }
});

require(['build/home/js/index.js','smoothScroll'],function (controller) {
    controller.initial();
});