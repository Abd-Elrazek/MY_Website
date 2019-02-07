/* global  , document, $ */
	var n = document.getElementById("switch");
var checked = function () {
	"use strict"
	if (n.checked) {
		$('.T_').css("background", "rgb(148, 148, 147);"); // T_ class for label for chechbox
		$('head').append('<link class = "sun_mode" rel="stylesheet" href="css/sun-style.css" />');
		$('head').append('<style class ="toggle" type="text/css"> label:after{background:#ededec}; </style>');
		$(".night_mode").remove();
		$(".toggle_s").remove();
		$(".sun_icon").css("color", "rgb(243, 226, 2)");
		$(".fa-moon").css("color", "rgb(148, 148, 147)");
	} else {
		$('.T_').css("background", "rgb(6, 15, 25)");
		$('head').append('<link class = "night_mode" rel="stylesheet" href="css/night-style.css" />');
		$('head').append('<style class ="toggle_s" type="text/css"> label:after{background: #fff;}; </style>');
		$(".sun_mode").remove();
		$(".toggle").remove();
		$(".sun_icon").css("color", "rgb(84, 88, 77)")
		$(".fa-moon").css("color", "rgb(247, 247, 243)");
	}

};
checked();
$("input[type=checkbox]").on("click", checked);

