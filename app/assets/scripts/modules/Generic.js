import $ from 'jquery';

class Generic {
	constructor() {
		this.setParentWidth();
		// this.closeNav();
		// this.changeImageOnHover();
	}

	setParentWidth() {
		var sponsersItem = $('.sponsers__item');
		var sponsersWidth = sponsersItem.width() * (sponsersItem.length + 1) + 50;
		$('.sponsers').css('width', sponsersWidth);
	}

	// closeNav() {
	// 	$(document.body).click(function() {
	// 		console.log('click on body');
	// 	});
	// }


	// changeImageOnHover() {
	// 	$('.upcoming-events__background').hover(function() {
	// 		console.log('From hover');
	// 		$(this).attr('src', 'assets/upcoming.png');
	// 	});

	// }
	
}

export default Generic;