/* global  , document */

var checked = function () {
    var n = document.getElementById("switch").checked;
    if (n)
        $("body").css("background-color", "rgb(222, 222, 221)")
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
    $(".card").css("background-color", "rgb(255, 255, 255)");
    $(".card").css("box-shadow", "rgba(99, 97, 97, 0.58) 0px 8px 0px 0px, rgba(64, 62, 63, 0.09) 1px 0px 0px 0px, rgba(0, 0, 0, 0.36) -11px 11px 5px 14px")
    if (!n) {
        $("body").css("background-color", "rgb(66, 66, 64)")
        $(".card").css("box-shadow", "0 6px 6px 0 rgba(0, 0, 0, 3.2), 0 1px 1px 0 rgba(10, 6, 9, 6.14), 0 10px 4px 14px rgba(0, 0, 0, 0.5)")
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
        $(".card").css("background-color", "#222");
    }

};

checked();
$("input[type=checkbox]").on("click", checked);
