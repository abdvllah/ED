import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import PageScroll from './modules/PageScroll';
import RevealOnScroll from './modules/RevealOnScroll';
import Slider from './modules/Slider';
import ContentChange from './modules/ContentChange';
import Modal from './modules/_modal.js';


var mobileMenu = new MobileMenu();
var pageScroll = new PageScroll();

new Slider($('#testimonial-slider'));

// new ContentChange( $('#team .team__pillow') , $('.team-member') );
new ContentChange( $('.team__pillow'), $('.team-member') );
new ContentChange( $('.events-page .icon-wrapper__icon'), $('.events-page .content') );

new RevealOnScroll();

new Modal();

$(document).ready(function() {
    console.log("Document is ready");
    var sponsersItem = $('.sponsers__item');
    var sponsersWidth = sponsersItem.width() * (sponsersItem.length + 1) + 50;
    $('.sponsers').css('width', sponsersWidth);

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
