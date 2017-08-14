import $ from 'jquery';

class Filter {
	// The object will take two arguments
	// First: The filter Item to be clickd
	// Second: The affected filter results
	constructor(filterItem, results) {
		this.filterItem = filterItem;
		this.results = results;
		this.filterClick();
		this.clearClick();
	}

	filterClick() {
		var that = this;
		this.filterItem.on('click', function() {
			var thisfilterItem = this;
			$(that.filterItem).removeClass('active');
			$(thisfilterItem).addClass('active');

			var who = $(thisfilterItem).attr('data-who');
			// console.log(who);


			// Hide all results initially
			that.results.parent().hide();

			// Go through each result item
			that.results.each(function() {

				// point to current
				var current = $(this);

				// get the month data
				var resultMonth = current.attr('data-month');
				// get the type data
				var resultType = current.attr('data-type');

				// If the event month mached the clicked month, then show it
				if(resultMonth == who) {
					current.parent().fadeIn(1000);
				}

				// If the event month mached the clicked type, then show it
				if (resultType == who) {
					current.parent().fadeIn(1000);
				}
  

			}); // End results each

		});


			// var filter = $(thisElement).attr('data-filter');

			// var param = document.location.search.substr(0);
			// console.log(param);

			// if(filter == 'month') {
				// $.get("http://localhost:3000/page-upcoming.html?month=" + who);
				// window.location.href = "http://localhost:3000/page-upcoming.html?month=" + who;
				// document.location.replace("http://localhost:3000/page-upcoming.html?month=" + who);
			// 	document.location.search = "month=" + who;
			// }
			// else if(filter == 'type') {
				// document.location.replace("http://localhost:3000/page-upcoming.html?type=" + who);
			// 	document.location.search = "type=" + who;
			// }



			// $.get("http://localhost:3000/page-upcoming.html?" + )

			// console.log(thisElement);
			// $(that.element).removeClass('active');
			// $(this).addClass('active');

			return false;
	} // End Filter Click Function


	clearClick() {
		var that = this;
		$('.filter button').click(function() {
			$(that.filterItem).removeClass('active');
			that.results.parent().show();
		});
	}

	getSearchParams() {
		// Get the string

		// Split the string

		// return array
	}

	putSearchParams() {
		// Check if there is more than one param

		// Concatanate the string

		// Put it in Url
	}

}

export default Filter;