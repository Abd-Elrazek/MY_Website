/* global  , document */

var checked = function () {
    var n = document.getElementById("switch").checked;
    if (n)
        document.body.style.background = "#ededec";
    $('.navbar-default').css("background-color", "#ededec")
    $('.T_').css("background", "#222"); // T_ class for label for chechbox
    $('head').append('<style class ="toggle" type="text/css"> label:after{background:#ededec}; </style>');
    $(".toggle_s").remove();
    if (!n) {
        document.body.style.background = "#222";
        $('.navbar-default').css("background-color", "#222")
        $('.T_').css("background", "#ededec");
        $('head').append('<style class ="toggle_s" type="text/css"> label:after{background:#222}; </style>');
        $(".toggle").remove();
    }

};

checked();

$("input[type=checkbox]").on("click", checked);
