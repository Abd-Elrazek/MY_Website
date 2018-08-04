$(window).load = function () {
	"use strict"
	$("#loader").fadeOut(2000, function () {
		$(this).parent().fadeOut(2000, function () {
			$('html').css('overflow', 'auto');
			$('body').css("overflow", "auto");
			$("#preloader").remove();
		});
	});
}();