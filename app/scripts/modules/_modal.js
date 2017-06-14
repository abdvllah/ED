import $ from 'jquery';


class modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		// Clicking open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// Clicking close button
		this.closeModalButton.click(this.closeModal.bind(this));
	}

	openModal() {
		this.modal.addClass('modal--visible');
		return false;
	}

	closeModal() {
		this.modal.removeClass('modal--visible');
		return false;
	}
}

export default modal;