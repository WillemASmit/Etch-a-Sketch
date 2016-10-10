$(document).ready( function () {
	makeGrid(32);
	$('.row>div').mouseenter( function () {
		$(this).addClass('active')
	})
});

var makeGrid = function (number) {
	dist = 600/number
	for (var i = 0; i < number; i++) {
		$('.wrapper').append("<div class = 'row'></div>");
		/*$('.wrapper:last-child').width(600)
		$('.wrapper:last-child').height(Math.round(dist-0.5))*/
		for (var j = 0; j < number; j++) {
			$('.wrapper>div:last-child').append("<div></div>");
			$('.wrapper>div>div:last-child').width(Math.round(dist-0.5))
			$('.wrapper>div>div:last-child').height(Math.round(dist-0.5))
		};
	};
}

function refresh() {
	$('.row>div').removeClass('active')
}