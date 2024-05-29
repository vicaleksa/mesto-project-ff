export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    popup.classList.add('popup_is-animated');
};

export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    window.removeEventListener('keydown', closeModalOnEscape);
};

export function closeModalByClick(evt) {
    window.removeEventListener('keydown', closeModalOnEscape);
    if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup_is-opened')) {
        evt.currentTarget.classList.remove('popup_is-opened');
    }
};

export function closeModalOnEscape(evt) {
    if (evt.key === 'Escape') {
        const popupElement = document.querySelector('.popup_is-opened');
        popupElement.classList.remove('popup_is-opened');
    }
};
