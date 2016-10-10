$(document).ready( function () {
	makeGrid(32);
	$('.row>div').mouseenter( function () {
		var opa = $(this).css('opacity');
		console.log(opa)
		opa = (parseFloat(opa,10) + 0.1).toString();
		$(this).css("opacity",opa);
	})
});

var makeGrid = function (number) {
	dist = 600/number
	for (var i = 0; i < number; i++) {
		$('.wrapper').append("<div class = 'row'></div>");
		for (var j = 0; j < number; j++) {
			$('.wrapper>div:last-child').append("<div></div>");
			$('.wrapper>div>div:last-child').width(Math.round(dist-0.5))
			$('.wrapper>div>div:last-child').height(Math.round(dist-0.5))
		};
	};
}

function refresh() {
	$('.row').remove()
	var blocks = parseInt(prompt("Please enter the size of the n x n matrix","Type in the amount of rows"),10)
	$('.row>div').css("opacity",0)
	makeGrid(blocks)
	$(document).ready( function () {
		$('.row>div').mouseenter( function () {
			var opa = $(this).css('opacity');
			console.log(opa)
			opa = (parseFloat(opa,10) + 0.1).toString();
			$(this).css("opacity",opa);
		})
	});
}