AOS.init();

// When your mouse cursor enter the background, the fading won't pause and keep playing
$('.carousel').carousel({
	pause: "false" // Change to true to make it paused when your mouse cursor enter the background
});


/*
 * This is for the scroll up and down
 * navigation fade-in and fade-out
 *
 */

$(document).ready(function() {
	var load_flag = true;
	$(document).scroll(function() {

		var mywindow = $(window);
		var mypos = mywindow.scrollTop();
		var up = false;
		var newscroll;
		mywindow.scroll(function () {
			newscroll = mywindow.scrollTop();
			if (newscroll > mypos && !up) {
				$('#navbar-custom').fadeOut();
				up = !up;
				console.log(up);
			} else if(newscroll < mypos && up) {
				$('#navbar-custom').fadeIn();
				up = !up;
			}
			mypos = newscroll;
		});
	});
});