/* global */
// variables 
$('[data-toggle="tip"]').tooltip({
	animated: 'fade',
	placement: 'top',
	html: true
});

$('[data-toggle="tooltip"]').tooltip({
	animated: 'fade',
	placement: 'top',
	html: true
});
////////////////////////////////

$(document).ready(function () {
	// Function Ajax
	var ajax_send = function () {
		jQuery.ajax({
			type: "POST",
			url: "contact.php",
			data: {
				user: $("#user_send").val(),
				phoneN: $("#phone_send").val(),
				mails: $("#mail_send").val(),
				message: $("#message_send").val(),
				recapacha: grecaptcha.getResponse()
			}
		}).done(function (response) {
			setTimeout(function () {
				$('.image-loading h3').fadeOut();
				$('.image-loading').fadeOut();
			});



			if (response == 1) {
				$('#contact-form')[0].reset();
				grecaptcha.reset();
				$('#msg_place').css({
					"background-color": "#55767d80",
					"color": "white",
					"border-color": "white"
				});
				$('#msg_place').html("Message Sent Successfully");
				$('#msg_place').show();
				$("#msg_place").fadeOut(8000, function () {
					$(this).css("display", "none");
				});
			} else {
				var message = response.replace("[", "");
				message = message.replace(",", "<br>");
				message = message.replace(",", "<br>");
				message = message.replace(",", "<br>");
				message = message.replace(",", "<br>");
				message = message.replace("]", "");
				message = message.replace("3", "<strong> 3 </strong>")
				message = message.replace("Number", "<strong> Number </strong>");
				message = message.replace("16", "<strong> 16 </strong>");
				$('#msg_place').css({
					"background-color": "rgba(240, 17, 17, 0.46)",
					"color": "white",
					"border-color": "white"
				});
				$('#msg_place').html(message);
				$('#msg_place').show();
			}
		}); // end ajax
	}

	$("#btn_send").click(function () {
		$('.image-loading').fadeIn();
		$('.image-loading h3').fadeIn();
		ajax_send();
	});

});
