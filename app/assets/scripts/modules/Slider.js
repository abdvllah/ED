import $ from 'jquery';
import jqueryUi from 'jquery-ui-bundle';

class Slider {
	constructor(sliderID) {
		this.sliderWrapper = sliderID;
		// console.log(this.sliderWrapper);
		this.trigger = $(this.sliderWrapper).children('.next');
		// console.log(this.trigger);
		this.sliders = $(this.sliderWrapper).children('.slide');
		// console.log(this.sliders);
		this.events();
		this.count = 1;
	}

	events() {
		this.trigger.on('click', this.showNext.bind(this));
	}

	showNext() {
		this.trigger.prop('disabled', true);
		this.count++;

		// if last sibling not reached yet
		if (this.count <= this.sliders.length) {
			// Get the next element from visible
			var next = $('.slide--visible').next('.slide');

			// Remove class from all siblings and hide them
			this.sliders.removeClass('slide--visible').hide();

			$(next).addClass('slide--visible')
			.show("slide", { time: 3, distance: 50 }, 1300, function(){
				$('.slider-wrapper .next').prop('disabled', false);
			});
		}
		// If we reach last sibling, we select the first to make a circle
		else {
			this.count = 1;
			this.sliders.removeClass('slide--visible').hide();

			$('.slide:first').addClass('slide--visible')
			.show("slide", { time: 3, distance: 50 }, 1300, function() {
				$('.slider-wrapper .next').prop('disabled', false);
			});
		}

	}

}

export default Slider;