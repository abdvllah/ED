// import $ from 'jquery';
// import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

// class RevealOnScroll {
// 	constructor() {
// 		// this.trigger = elements;
// 		// this.offsetPercentage = offset;
// 		this.setInitially();
// 		this.createWaypoints();
// 	}

// 	setInitially() {
// 		var that = this;
// 		$(document).ready(function() {
// 			$('.large-hero__site-logo').addClass('reveal-item');
// 			$('.upcoming-events__image').addClass('reveal-item');
// 		});
// 	}

// 	createWaypoints() {
// 		var that = this;
// 		new Waypoint({
// 			element: document.getElementById('large-hero'),
// 			handler: function() {
// 				$('.large-hero__site-logo').addClass('reveal-item--is-visible');
// 				// console.log($(currentItem).attr('id') + " triggered");
// 				},
// 				offset: 10
// 			});

// 		new Waypoint({
// 			element: document.getElementById('upcoming'),
// 			handler: function() {
// 				$('.upcoming-events__image').addClass('reveal-item--is-visible');
// 				// console.log($(currentItem).attr('id') + " triggered");
// 				},
// 				offset: 10
// 			});
// 	}


// } // End class

// export default RevealOnScroll;