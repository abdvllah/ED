import $ from 'jquery';

class Generic {
	constructor() {
		this.setParentWidth();
		this.addActiveState();
		this.showAlert();
		this.hideLoader();
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

	showAlert() {
		$('.alert').slideDown(1000).delay(3000).fadeOut(1000);
	}

	hideLoader() {
		$(document).ready(function() {
			$('.loader').hide();
		});
	}


}

export default Generic;