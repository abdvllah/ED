import $ from 'jquery';

class Slider {
	constructor() {
		this.trigger = $('.slider-wrapper .next');
		this.sliderWrapper = $('.slider-wrapper');
		this.sliders = $('.slide');
		this.events();
		this.count = 1;
	}

	events() {
		this.trigger.click(this.showNext.bind(this));
	}

	showNext() {
		this.count++;
		// console.log(this.sliders.length);
		if (this.count <= this.sliders.length) {
			var next = $('.slide--visible').next('.slide');
			$('.slide').removeClass('slide--visible').css('display','none');
			$(next).addClass('slide--visible').fadeIn(1000);
		}
		else {
			// console.log('Lash reached');
			this.count = 1;
			$('.slide').removeClass('slide--visible').css('display','none');
			$('.slide:first').addClass('slide--visible').fadeIn(1000);
		}
		
		// console.log($('.slide').length);
	}

}

export default Slider;