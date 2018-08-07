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
// ajax send 
$(document).ready(function () {
	$("#btn_send").click(function () {
		// write ajax
		jQuery.ajax({
			type: "POST",
			url: "contact.php",
			data: {
				user: $("#user_send").val(),
				phoneN: $("#phone_send").val(),
				mail: $("#mail_send").val(),
				message: $("#message_send").val()
			}
		}).done(function (response) {
			if (response == 1) {
				$('#mail_send').val('');
				$('#user_send').val('');
				$('#phone_send').val('');
				$('#message_send').val('');
				$('#msg_place').css({
					"background-color": "#55767d80",
					"color": "white",
					"border-color": "white"
				});
				$('#msg_place').html("Message Sent Successfully");
				$('#msg_place').show();
			} else {
				var message = response.replace("Array[", "");
				message = message.replace(",", "<br>");
				message = message.replace(",", "<br>");
				message = message.replace("]", "");
				message = message.replace("3", "<strong> 3 </strong>")
				message = message.replace("Number", "<strong> Number </strong>")
				message = message.replace("15", "<strong> 15 </strong>")
				$('#msg_place').css("display", "block");
				$('#msg_place').html(message);
				$('#msg_place').show();
			}
		}); // end ajax


	});

});
