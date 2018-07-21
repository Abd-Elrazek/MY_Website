/* global  , document */

var checked = function () {
    var n = document.getElementById("switch").checked;
    if (n)
        $('.navbar-default').css("background-color", "rgb(255, 255, 255)");
    $('.navbar-default .navbar-nav li a').css("color", "black");
    $('.T_').css("background", "#222"); // T_ class for label for chechbox
    $('.navbar-default .navbar-nav .active a').css({
        "background-color": "#222",
        "color": "rgb(255, 255, 255)"
    });
    $('head').append('<style class ="toggle" type="text/css"> label:after{background:#ededec}; </style>');
    $(".toggle_s").remove();
    $(".sun_icon").css("color", "rgb(243, 226, 2)");
    $(".fa-moon").css("color", "rgb(148, 148, 147)");
    $(".navbar-default").css("border-color", "#222");
    if (!n) {
        $('.navbar-default .navbar-nav li a').css("color", "rgb(255, 255, 255)");
        $('.T_').css("background", "rgb(255, 255, 255)");
        $('.navbar-default .navbar-nav .active a').css({
            "background-color": "rgb(255, 255, 255)",
            "color": "#222"
        });
        $('head').append('<style class ="toggle_s" type="text/css"> label:after{background:#222}; </style>');
        $(".toggle").remove();
        $(".sun_icon").css("color", "rgb(84, 88, 77)")
        $(".fa-moon").css("color", "rgb(247, 247, 243)");
        $('.navbar-default').css({
            "background-color": "#222",
            "border-bottom-color": "rgb(255, 255, 255)"
        });
    }

};

checked();
$("input[type=checkbox]").on("click", checked);
