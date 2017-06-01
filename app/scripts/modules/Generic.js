import $ from 'jquery';

$(document).ready(function() {
    console.log("Document is ready");
    var sponsersItem = $('.sponsers__item');
    console.log(sponsersItem.length);
});


// Activating hover for touch screens
$('*').on("touchstart", function (e) {
    "use strict"; //satisfy the code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass("hover");
        $('*').not(this).removeClass("hover");
        // e.preventDefault();
        // return false; //extra, and to make sure the function has consistent return points
    }
});
