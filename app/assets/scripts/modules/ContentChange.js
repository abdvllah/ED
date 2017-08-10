import $ from 'jquery';

class ContentChange {
	constructor(element, content) {
		// this.element = element;	
		// this.pillow = element.find('.team__pillow');
		this.element = element;
		this.contentE = content;
		this.alterContent();
	}

	alterContent() {
		var that = this;
		this.element.on('click', function() {
			var thisElement = this;
			$(thisElement).css('pointer-events','none');
			// console.log(that.contentE);
			$(that.element).removeClass('active');
			$(this).addClass('active');

			var who = $(this).attr('data-who');

			// $(this).find('img').attr('src','assets/pages/' + who + '.svg');

			that.contentE.hide();
			$('#' + who).fadeIn(2000, function() {
				$(thisElement).css('pointer-events','auto');
			});
			// console.log(who);
		});
	}

}

export default ContentChange;