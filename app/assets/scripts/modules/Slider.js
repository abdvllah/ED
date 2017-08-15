import $ from 'jquery';
import jqueryUi from 'jquery-ui-bundle';

class Slider {
	constructor(sliderID) {
		this.sliderWrapper = sliderID;
		this.next = $(this.sliderWrapper).children('.next');
		this.prev = $(this.sliderWrapper).children('.prev');
		this.sliders = $(this.sliderWrapper).children('.slide');
		this.events();
		this.count = 1;
		console.log(this.count);
	}

	events() {
		this.next.on('click', this.showNext.bind(this));
		this.prev.on('click', this.showPrev.bind(this));
	}

	showNext() {
		console.log(this.count);
		var nextBtn = this.next;

		// if last sibling not reached yet
		if (this.count < this.sliders.length) {
			this.count++;
			// this.next.prop('disabled', true);
			nextBtn.css('pointer-events','none');

			// Get the next element from visible
			var next = $('.slide--visible').next('.slide');

			// Remove class from all siblings and hide them
			this.sliders.removeClass('slide--visible').hide();

			$(next).addClass('slide--visible')
			.show("slide", { time: 3, distance: 50 }, 1300, function(){
				// $('.slider-wrapper .next').prop('disabled', false);
				nextBtn.css('pointer-events','auto');
			});
		}
		// If we reach last sibling, we select the first to make a circle
		// else {
		// 	this.count = 1;
		// 	this.sliders.removeClass('slide--visible').hide();

		// 	$('.slide:first').addClass('slide--visible')
		// 	.show("slide", { time: 3, distance: 50 }, 1300, function() {
		// 		$('.slider-wrapper .next').prop('disabled', false);
		// 	});
		// 	}

		}

		showPrev() {
			console.log(this.count);
			var prevBtn = this.prev;

			// if last sibling not reached yet
			if (this.count > 1) {
				this.count--;
				// this.prev.prop('disabled', true);
				prevBtn.css('pointer-events','none');

				// Get the next element from visible
				var prev = $('.slide--visible').prev('.slide');

				// Remove class from all siblings and hide them
				this.sliders.removeClass('slide--visible').hide();

				$(prev).addClass('slide--visible')
				.show("slide", { time: 3, distance: 50 }, 1300, function(){
					// $('.slider-wrapper .prev').prop('disabled', false);
					prevBtn.css('pointer-events','auto');

				});
			}
			// If we reach last sibling, we select the first to make a circle
			// else {
			// 	this.count = 1;
			// 	this.sliders.removeClass('slide--visible').hide();

			// 	$('.slide:first').addClass('slide--visible')
			// 	.show("slide", { time: 3, distance: 50 }, 1300, function() {
			// 		$('.slider-wrapper .next').prop('disabled', false);
			// 	});
			// }

		}

}

export default Slider;