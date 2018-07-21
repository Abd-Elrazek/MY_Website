/* global  , document */

var checked = function () {
    var n = document.getElementById("switch").checked;
    if (n)
        document.body.style.background = "#ededec";
    $('.navbar-default').css("background-color", "#ededec");
    $('.navbar-default .navbar-nav li a').css("color", "black");
    $('.T_').css("background", "#222"); // T_ class for label for chechbox
    $('.navbar-default .navbar-nav .active a').css({
        "background-color": "#222",
        "color": "#ededec"
    });
    $('head').append('<style class ="toggle" type="text/css"> label:after{background:#ededec}; </style>');
    $(".toggle_s").remove();
    if (!n) {
        document.body.style.background = "#222";
        $('.navbar-default .navbar-nav li a').css("color", "#ededec");
        $('.navbar-default').css("background-color", "#222");
        $('.T_').css("background", "#ededec");
        $('.navbar-default .navbar-nav .active a').css({
            "background-color": "#ededec",
            "color": "#222"
        });
        $('head').append('<style class ="toggle_s" type="text/css"> label:after{background:#222}; </style>');
        $(".toggle").remove();
    }

};

checked();
$("input[type=checkbox]").on("click", checked);
