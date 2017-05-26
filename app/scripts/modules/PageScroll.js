import $ from 'jquery';

class PageScroll {
	constructor() {
		this.events();
	}

	events() {
		$('.site-menu__navigation a.direct-page').click(this.animateScroll);
		$(document).scroll(this.changeLocationHash);
		$('.site-menu__navigation a.next').click(this.scrollToNext);
		$('.site-menu__navigation a.prev').click(this.scrollToPrev);
	}

	animateScroll(e) {
		e.preventDefault();
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top 
		}, 1000);
	}

	changeLocationHash() {
			$('section').each(function(){
				var current = $(this);
				if( current.offset().top  <= $(window).scrollTop() +10
				&& ( current.offset().top + current.height() )  > $(window).scrollTop()
				) {
			 		current = "#show-" + current.attr('id');
					window.location.hash = current;
			}
		});
	}

	scrollToNext() {
		// Get location hash
		var hash = window.location.hash;

		// Clean the hash to mach id
		var realHash = hash.substr(6);
		realHash = "#" + realHash;

		// Get the next section object
		var next = $(realHash).next();

		// Animate to next section
		$('html, body').animate({
			scrollTop: $(next).offset().top 
		}, 1000);
	}

	scrollToPrev() {
		// Get location hash
		var hash = window.location.hash;

		var realHash = hash.substr(6);
		realHash = "#" + realHash;

		var prev = $(realHash).prev();

		$('html, body').animate({
			scrollTop: $(prev).offset().top 
		}, 1000);
	}






		// $('section').each(function(){
		// 	var current = $(this);
		// 	if( current.offset().top  <= $(window).scrollTop()
		// 	&& ( current.offset().top + current.height() )  > $(window).scrollTop()
		// 	) {

		// 		$(window).location.hash = current.attr('id');

				// Get next section id
				// var next = current.next().attr('id');
				// next = "#" + next;
				// console.log(next);

				// Animate scroll to next section
				// $('html, body').animate({
				// 	scrollTop: $(next).offset().top 
				// }, 1000);
			// }
			// else {
				// Get next section id
				// var next = current.next().attr('id');
				// next = "#" + next;
				// console.log(next);

				// // Animate scroll to next section
				// $('html, body').animate({
				// 	scrollTop: $(next).offset().top 
				// }, 1000);
		// 	}
		// });
		
	}



export default PageScroll;