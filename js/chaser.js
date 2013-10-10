$(document).foundation('reveal', {animation: 'fade', animationspeed: 200});

function revealone() {
	$('#slides-1').foundation('reveal', 'open');
	createSlidesOne();
}

var derp1 = function(){ $('div.opener').bind('inview', function(event, visible) {
	if (visible) {
		$(this).stop().animate({ opacity: 1}, 1500);
	}
	if (!visible) {
		$('#name1').animate({opacity: 0}, 450);
		$('#name2').animate({opacity: 1}, 450);
	} else {
		$('#name1').stop().animate({opacity: 1}, 150);
		$('#name2').stop().animate({opacity: 0}, 150);
	}
})};
derp1();

var derp2 = function(){ $('#footer-bar').bind('inview', function(event, visible) {
	if (visible) {
		$('#next-chapter').stop().animate({ opacity: 1}, 700);
	}
})};
derp2();

var derp3 = function(){ $('#map1').one('inview', function(event, visible) {
	if (visible) {
		$(this).children('iframe').attr( "src", "./map/stormChaserMapPart1.html");
	}
})};
derp3();