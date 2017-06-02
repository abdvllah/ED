import $ from 'jquery';

class ContentChange {
	constructor(element) {
		this.element = element;	
		this.pillow = element.find('.team__pillow');
		this.alterContent();
	}

	alterContent() {
		var that = this;
		this.pillow.on('click', function() {
			var who = $(this).attr('data-who');
			$('.team-member').hide();
			$('#' + who).fadeIn(2000);
			console.log(who);
		});
	}

}

export default ContentChange;