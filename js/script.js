$(document).ready( function () {
	makeGrid();
	$('.row>div').mouseenter( function () {
		$(this).addClass('active')
	})
	$('.row>div').mouseleave( function () {
		$(this).removeClass('active')
	})
});

var makeGrid = function () {
	for (var i = 0; i < 16; i++) {
		$('.wrapper').append("<div class = 'row'></div>");
		for (var j = 0; j < 16; j++) {
			$('.wrapper>div:last-child').append("<div></div>");
		};
	};
}