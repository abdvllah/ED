import $ from 'jquery';

class Generic {
	constructor() {
		this.setParentWidth();
		this.addActiveState();
		// this.closeNav();
		// this.changeImageOnHover();
	}

	setParentWidth() {
		var sponsersItem = $('.sponsers__item');
		var sponsersWidth = sponsersItem.width() * (sponsersItem.length + 1) + 50;
		$('.sponsers').css('width', sponsersWidth);
	}

	addActiveState() {
		$('.pillow:first-of-type').addClass('active');
		$('.team-member:first-of-type').addClass('active')
	}

	
}

export default Generic;