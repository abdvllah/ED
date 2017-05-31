import $ from 'jquery';
import scrollify from 'jquery-scrollify';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class PageScroll {
	constructor() {
		this.triggerSections = $('section');
		this.events();
	}

	events() {
		$('.site-menu__navigation a.direct-page').click(this.animateScroll);
		$(document).scroll(this.changeLocationHash);
		this.ScrollSections();
	}

	animateScroll(e) {
		e.preventDefault();
		var linkHref = $(this).attr('data-href');
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
					var currentId = current.attr('id');
					$('.direct-page').removeClass('active');
					$('.direct-page[data-href="#' + currentId + '"]').addClass('active');
			 		// current = "#show-" + current.attr('id');
					// window.location.hash = current;
			}
		});
	}

	// Using jquery scrollify plugin
	ScrollSections() {
		$.scrollify({
			section : ".wrapper-full-height",
			scrollSpeed: 700,
			updateHash: false
		});
	}
		
} // End class 



export default PageScroll;