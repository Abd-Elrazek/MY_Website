/* global  , document, $ ,jBox*/

$(document).ready(function () {
	'use strict'
	new jBox("Tooltip", {
		attach: ".tool-tips",
		width: 85,
		closeOnMouseleave: true,
		animation: "zoomIn",
		content: " Follow Me ",
		adjustDistance: {
			top: 55,
			right: 5,
			bottom: 5,
			left: 5
		},
		zIndex: 4e3
	});
});

function notehire() {
	new jBox("Notice", {
		attributes: {
			x: "right",
			y: "bottom"
		},
		stack: false,
		animation: {
			open: "tada",
			close: "zoomIn"
		},
		title: "&diams; Hi &diams;",
		content: "&#8220; You can send me message &#8221;"
	});

};
