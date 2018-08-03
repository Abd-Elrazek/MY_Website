/* global  , document, $ */
var checked = function () {
	var n = document.getElementById("switch").checked;
	if (n) {
		$('.T_').css("background", "rgb(148, 148, 147);"); // T_ class for label for chechbox
		$('head').append('<style class ="toggle" type="text/css"> label:after{background:#ededec}; </style>');
		$(".toggle_s").remove();
		$(".sun_icon").css("color", "rgb(243, 226, 2)");
		$(".fa-moon").css("color", "rgb(148, 148, 147)");
	} else {
		$('.T_').css("background", "rgb(6, 15, 25)");
		$('head').append('<style class ="toggle_s" type="text/css"> label:after{background:#222}; </style>');
		$(".toggle").remove();
		$(".sun_icon").css("color", "rgb(84, 88, 77)")
		$(".fa-moon").css("color", "rgb(247, 247, 243)");
	}
};

checked();
$("input[type=checkbox]").on("click", checked);
