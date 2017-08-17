import $ from 'jquery';
import jqueryUi from 'jquery-ui-bundle';

class Slider {
	constructor(sliderID) {
		this.sliderWrapper = sliderID;

		// Get next button
		this.next = $(this.sliderWrapper).children('.next');

		// Get previous button
		this.prev = $(this.sliderWrapper).children('.prev');

		// Get the slider elements
		this.sliders = $(this.sliderWrapper).children('.slide');

		this.events();

		// Set the slider index count at first 'oviously'
		this.count = 1;

		// In first slider you can't go previous 'oviously'
		this.prev.addClass('disable');
	}

	events() {
		// Add click events to buttons
		this.next.on('click', this.showNext.bind(this));
		this.prev.on('click', this.showPrev.bind(this));
	}

	// Handle next button click event
	showNext() {

		// Next button variable
		var nextBtn = this.next;

		// If next is clicked we can go to previous :)
		this.prev.removeClass('disable');

		// if last sibling not reached yet
		if (this.count < this.sliders.length) {
			// Track slide index
			this.count++;

			// disable until the function finished
			nextBtn.css('pointer-events','none');

			// Get the next element, it will be after the current visible element
			var next = $('.slide--visible').next('.slide');

			// Remove class from all siblings and hide them
			this.sliders.removeClass('slide--visible').hide();

			// Show the next element and give it a class
			$(next).addClass('slide--visible')
			.show("slide", { time: 3, distance: 50 }, 1300, function(){
				nextBtn.css('pointer-events','auto');
			});

			// We will check if last element was reach we disable the next button
			if(this.count == this.sliders.length) {
				nextBtn.addClass('disable');
			}

		}
	}


		showPrev() {
			// Previous button variable
			var prevBtn = this.prev;

			// If previous is clicked we can go to next :)
			this.next.removeClass('disable');


			// if last sibling not reached yet
			if (this.count > 1) {
				// Track slide index
				this.count--;

				// disable until the function finished
				prevBtn.css('pointer-events','none');

				// Get the previous element, it will be before the current visible element
				var prev = $('.slide--visible').prev('.slide');

				// Remove class from all siblings and hide them
				this.sliders.removeClass('slide--visible').hide();

				// Show the previous element and give it a class
				$(prev).addClass('slide--visible')
				.show("slide", { time: 3, distance: 50 }, 1300, function(){
					// $('.slider-wrapper .prev').prop('disabled', false);
					prevBtn.css('pointer-events','auto');

				});

				// We will check if first element was reach we disable the previous button
				if(this.count == 1) {
					this.prev.addClass('disable');
				}
			}

		}

}

export default Slider;