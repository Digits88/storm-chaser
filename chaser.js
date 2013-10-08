$(document).foundation('reveal', {animation: 'fade', animationspeed: 200});

function revealone() {
	$('#slides-1').foundation('reveal', 'open');
	createSlidesOne();
}

var derp2 = function(){ $('div.opener').bind('inview', function(event, visible) {
	if (visible) {
		$(this).stop().animate({ opacity: 1}, 1500);
	}
})};
derp2();

var derp2 = function(){ $('#footer-bar').bind('inview', function(event, visible) {
	if (visible) {
		$('#next-chapter').stop().animate({ "bottom": "0" }, 800);
		$('#next-chapter').animate({ opacity: 1 }, 100);
	} else {
		$('#next-chapter').stop().css( "bottom", "-1.3em" );
		$('#next-chapter').stop().animate({ opacity: 0 }, 100);
	}
})};
derp2();