import './index.css';
import '../vendor/fonts.css';
import '../vendor/normalize.css';

import {createCards, addCardToList} from './components/card.js';
import {addClassToModal, closeModal, closeModalOnEscape} from './components/modal.js';

createCards();

const profileEditModal = document.querySelector('.popup_type_edit');
const newCardModal = document.querySelector('.popup_type_new-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const imageModal = document.querySelector('.popup_type_image');
const editProfileForm = profileEditModal.querySelector('.popup__form');
const newCardForm = newCardModal.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const placeName = document.querySelector('.popup__input_type_card-name');
const placeLink = document.querySelector('.popup__input_type_url');

profileEditButton.addEventListener('click', openModal);
newCardButton.addEventListener('click', openModal);
profileEditModal.addEventListener('click', closeModal);
newCardModal.addEventListener('click', closeModal);
imageModal.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModalOnEscape);
editProfileForm.addEventListener('submit', handleEditFormSubmit);
newCardForm.addEventListener('submit', handleCardFormSubmit);

function openModal(evt) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    switch(evt.target) {
        case profileEditButton:
            addClassToModal(profileEditModal);
            break;
        case newCardButton:
            addClassToModal(newCardModal);
            break;
    }
};

function handleEditFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;

    const popupElement = document.querySelector('.popup_is-opened');
    popupElement.classList.remove('popup_is-opened');
};

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    addCardToList(placeName.value, placeLink.value);

    const popupElement = document.querySelector('.popup_is-opened');
    popupElement.classList.remove('popup_is-opened');
    newCardForm.reset();
};