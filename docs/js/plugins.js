/* global  , document, $,window */
// Loading Screen ...
// when I write function as follow that appear problem ....

/*
(window).load(function () {
    $('.loading-overlay').fadeOut(1000);
    $('body').css("overflow", "auto");
});*/


$(window).load = function () {
	"use strict"
	$(".loading-overlay span").fadeOut(2000, function () {
		$(this).parent().fadeOut(2000, function () {
			$('body').css("overflow", "auto");
			$(this).parent().remove();
		});
	});
}();



$(document).ready(function () {
	$('.carousel').carousel({
		interval: "4000"
	});
	// show  section of color-option 
	$('.star').click(function () {
		$('.color-option').fadeToggle();
	});

	// Change Theme on click
	var colorLi = $('.color-option ul li');
	colorLi.eq(0).css('backgroundColor', "#4bd8e6").end()
		.eq(1).css('backgroundColor', "#7a9a74").end()
		.eq(2).css('backgroundColor', "#881b8a").end()
		.eq(3).css('backgroundColor', "#17586b").end()
		.eq(4).css('backgroundColor', "#c6dc10");

	colorLi.click(function () {
		//  console.log($(this).attr("data-value"));
		$("link[href*='theme']").attr("href", $(this).attr('data-value'));
		// console.log($("link[href*='theme']"));
	});

	// Caching The Scroll Top Element 
	var scrollToTop = $(".scroll-to-top");
	$(window).scroll(function () {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() >= 650) {
			scrollToTop.show();
		} else {
			scrollToTop.hide();
		}
	});

	scrollToTop.click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 600);
	});
});
