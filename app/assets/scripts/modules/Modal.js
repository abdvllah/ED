import $ from 'jquery';


class Modal {
	constructor(button, modal) {
		console.log('modal-contractor');
		this.openModalButton = button;
		this.modal = modal;
		this.formWrapper = $('.modal__form-wrapper');
		this.events();
	}

	events() {
		var that = this;
		// Clicking open modal button
		this.openModalButton.click(function() {
			that.modal.addClass('modal--visible');
			return false;
		});

		// Clicking close button
		this.formWrapper.click(function() {
			return;
		});

		this.modal.on('click', function(e){
			if (e.target !== this)
			    return;
			that.modal.removeClass('modal--visible');
			return false;
		});
	}


}

export default Modal;