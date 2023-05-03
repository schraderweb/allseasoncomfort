
$(document).ready(function() {


"use strict";

var $document = $(document),
	$window = $(window),
	plugins = {
		contactForm: $('#contactform'),
		contactModalForm: $('#contactform-modal'),
		newsletterForm: $('#newsletter_form'),
		appointmentForm: $('#appointment-form')
	}

	// Contact Form
	var $contactform = plugins.contactForm;
	$contactform.validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			message: {
				required: true,
				minlength: 20
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Please enter your name",
				minlength: "Your name must consist of at least 2 characters"
			},
			message: {
				required: "Please enter message",
				minlength: "Your message must consist of at least 20 characters"
			},
			email: {
				required: "Please enter your email"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "form-contact.php",
				success: function () {
					$('#success').fadeIn();
					$contactform.each(function(){this.reset();});
				},
				error: function () {
					$('#error').fadeIn();
				}
			});
		}
	});
	// Newsletter Form
	var $newsletterForm = plugins.newsletterForm;
	$newsletterForm.validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: "Please enter your email"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "form-newsletter.php",
				success: function () {
					$('#success').fadeIn();
					$newsletterForm.each(function(){this.reset();});
				},
				error: function () {
					$('#error').fadeIn();
				}
			});
		}
	});
	// AppointmentForm Form Modal
	var $appointmentform = plugins.appointmentForm;
	$appointmentform.validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			message: {
				required: true,
				minlength: 20
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Please enter your name",
				minlength: "Your name must consist of at least 2 characters"
			},
			message: {
				required: "Please enter message",
				minlength: "Your message must consist of at least 20 characters"
			},
			email: {
				required: "Please enter your email"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "form-appointment.php",
				success: function () {
					$('#success').fadeIn();
					$appointmentform.each(function(){this.reset();});
					closeModal();
				},
				error: function () {
					$('#error').fadeIn();
				}
			});
		}
	});
	// Contact Form Modal
	var $contactModalform = plugins.contactModalForm;
	$contactModalform.validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			message: {
				required: true,
				minlength: 20
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Please enter your name",
				minlength: "Your name must consist of at least 2 characters"
			},
			message: {
				required: "Please enter message",
				minlength: "Your message must consist of at least 20 characters"
			},
			email: {
				required: "Please enter your email"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "form-contact.php",
				success: function () {
					$('#success').fadeIn();
					$contactModalform.each(function(){this.reset();});
					closeModal();
				},
				error: function () {
					$('#error').fadeIn();
				}
			});
		}
	});

	function closeModal(){
		$('.popup_form').each(function(index){
			if($(this).hasClass('open')){
				$(this).find('.close_apt_form').trigger('click');
			}
		});
	};

});



// ======================== PRELOADER ========================


$(document).ready(function() {
    window.onload = function () {
    $(".preloader").fadeOut(500, function(){ $(".preloader").remove(); } );
    }
});