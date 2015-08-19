$(document).ready(function() {
	var $header = $('header').hide();

    $(window).scroll(function () { 
        if ($(this).scrollTop() > 520) {
            $('header').fadeIn("slow");
        } else {
            $('header').fadeOut("slow");
        }
    });

 });
