import $ from 'jquery';
import Generic from './modules/Generic';
import MobileMenu from './modules/MobileMenu';
import PageScroll from './modules/PageScroll';
import RevealOnScroll from './modules/RevealOnScroll';
import Slider from './modules/Slider';
import ContentChange from './modules/ContentChange';
import Modal from './modules/Modal';
import Filter from './modules/Filter';

// Handle Site Navigation
new MobileMenu();

// Handle Page Scrolling
new PageScroll();

// Handle Slider Components
new Slider($('#testimonial-slider'));

// Script for change content in div when clicking on control
new ContentChange( $('.team .pillow'), $('.team-member') );
new ContentChange( $('#content-change .icon-wrapper__icon'), $('#content-change .content') );

// Handle Model components
new Modal( $('.open-modal'), $('.modal') );
// new Modal( $('#open-book.open-modal'), $('#book-modal.modal') );

// Activate Filter Script
new Filter( $('.months-calendar__month') );
new Filter( $('.filter__item') );

// Generic Scripts
new Generic();


$(document).ready(function() {
    console.log("Document is ready");
    $("#datepicker").datepicker({
      changeMonth: true,
      changeYear: true
    });
    
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


// Handle Items anmination on reveal
new RevealOnScroll();
