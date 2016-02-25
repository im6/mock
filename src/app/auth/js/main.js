require.config({
    paths: {
        "jquery": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
            "/assets/metronic/global/plugins/jquery.min"
        ]
    }
});

require(['jquery'],function ($) {
    $(document).ready(function(){
        $("#login-button").click(function (event) {
            $('form').fadeOut(500);
            $('.socialIcon').fadeOut(500);
            $('.wrapper').addClass('form-success');
        });

    });
});

