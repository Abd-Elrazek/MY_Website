/* global  , document, $ */

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
}


// ------------------------------

//For Honest this  CODE SOURCE from : https://codepen.io/joxmar/pen/NqqMEg?editors=1010
// Cache selectors
var lastId,
	topMenu = $("#mainNav"),
	topMenuHeight = topMenu.outerHeight() + 1,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
		var item = $($(this).attr("href"));
		if (item.length) {
			return item;
		}
	});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
	var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	$('html, body').stop().animate({
		scrollTop: offsetTop
	}, 700);
	e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
	// Get container scroll position
	var fromTop = $(this).scrollTop() + topMenuHeight;

	// Get id of current scroll item
	var cur = scrollItems.map(function () {
		if ($(this).offset().top < fromTop)
			return this;
	});
	// Get the id of the current element
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
		lastId = id;
		// Set/remove active class
		menuItems
			.parent().removeClass("active")
			.end().filter(`[href="#${id}"]`).parent().addClass("active");
	}
});
