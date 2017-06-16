import $ from 'jquery';
import Generic from './modules/Generic';
import MobileMenu from './modules/MobileMenu';
import PageScroll from './modules/PageScroll';
import RevealOnScroll from './modules/RevealOnScroll';
import Slider from './modules/Slider';
import ContentChange from './modules/ContentChange';
import Modal from './modules/Modal';

// Handle Site Navigation
new MobileMenu();

// Handle Page Scrolling
new PageScroll();

// Handle Slider Components
new Slider($('#testimonial-slider'));

// Script for change content in div when clicking on control
new ContentChange( $('.team__pillow'), $('.team-member') );
new ContentChange( $('.events-page .icon-wrapper__icon'), $('.events-page .content') );

// Handle Items anmination on reveal
new RevealOnScroll();

// Handle Model components
new Modal();

// Generic Scripts
new Generic();

// $(document).ready(function() {
//     console.log("Document is ready");
    
// });


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
