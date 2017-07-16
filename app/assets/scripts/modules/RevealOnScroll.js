import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		// this.trigger = elements;
		// this.offsetPercentage = offset;
		this.setInitially();
		this.createWaypoints();
	}

	setInitially() {
		var that = this;
		$('.upcoming-events__image').addClass('reveal-item');
		// $('.testimonial').addClass('reveal-item');
	}

	createWaypoints() {
		var that = this;
		new Waypoint({
			element: document.getElementById('large-hero'),
			handler: function() {
				$('.large-hero__site-logo').addClass('slideToRight');
				$('.large-hero__slogen').addClass('slideToLeft');
				// console.log($(currentItem).attr('id') + " triggered");
				},
				offset: 10
			});

		new Waypoint({
			element: document.getElementById('upcoming'),
			handler: function() {
				$('.upcoming-events__image').addClass('reveal-item--is-visible');
				$('.upcoming-events__strip').addClass('slideToRight--slow');
				},
				offset: '70%'
			});

		new Waypoint({
			element: document.getElementById('testimonial'),
			handler: function() {
				$('.sponsers').addClass('horizentalScroll');
				// $('.testimonial').addClass('reveal-item--is-visible');
				},
				offset: '70%'
			});

		new Waypoint({
			element: document.getElementById('services'),
			handler: function() {
				$('.our-services__heading:first-of-type').addClass('slideToRight--slow');
				$('.our-services__heading:last-of-type').addClass('slideToLeft--slow');
				},
				offset: '50%'
			});

		new Waypoint({
			element: document.getElementById('team'),
			handler: function() {
				$('.team__nav ').addClass('slideToLeft--slow');
				},
				offset: '50%'
			});

		new Waypoint({
			element: document.getElementById('contact'),
			handler: function() {
				$('.contact__form').addClass('slideToRight');
				},
				offset: '70%'
			});

	}


} // End class

export default RevealOnScroll;