import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.menuIcon = $('.site-menu .icon');
		this.menuContent = $('.site-menu__content');
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-menu__content__is-visible");
		this.menuIcon.toggleClass("icon--close-x");
	}

}

export default MobileMenu;