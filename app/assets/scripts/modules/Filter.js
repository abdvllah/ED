import $ from 'jquery';

class Filter {
	constructor(element) {
		this.element = element;
		//console.log(this.element);
		// this.filterClick();
		this.getSearchParams();
	}

	filterClick() {
		var that = this;
		this.element.on('click', function() {
			var thisElement = this;
			$(that.element).removeClass('active');
			$(thisElement).addClass('active');

			var who = $(thisElement).attr('data-who');
			console.log(who);

			var filter = $(thisElement).attr('data-filter');

			var param = document.location.search.substr(0);
			console.log(param);

			if(filter == 'month') {
				// $.get("http://localhost:3000/page-upcoming.html?month=" + who);
				// window.location.href = "http://localhost:3000/page-upcoming.html?month=" + who;
				// document.location.replace("http://localhost:3000/page-upcoming.html?month=" + who);
				document.location.search = "month=" + who;
			}
			else if(filter == 'type') {
				// document.location.replace("http://localhost:3000/page-upcoming.html?type=" + who);
				document.location.search = "type=" + who;
			}



			// $.get("http://localhost:3000/page-upcoming.html?" + )

			// console.log(thisElement);
			// $(that.element).removeClass('active');
			// $(this).addClass('active');

		});
	} // End Filter Click Function

	getSearchParams() {
		// Get the string

		// Split the string

		// return array
	}

	putSearchParams() {
		// Check if there is more thant param

		// Concatanate the string

		// Put it in Url
	}

}

export default Filter;