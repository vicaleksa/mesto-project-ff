import './index.css';
import '../vendor/fonts.css';
import '../vendor/normalize.css';

import {initialCards} from './components/cards.js';
import {createCard, deleteCard, likeCard} from './components/card.js';
import {openModal, closeModal, closeModalByClick, closeModalOnEscape} from './components/modal.js';

const cardList = document.querySelector('.places__list');
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

createCards();

profileEditButton.addEventListener('click', handleOpenModal);
newCardButton.addEventListener('click', handleOpenModal);
profileEditModal.addEventListener('click', closeModalByClick);
newCardModal.addEventListener('click', closeModalByClick);
imageModal.addEventListener('click', closeModalByClick);
editProfileForm.addEventListener('submit', handleEditFormSubmit);
newCardForm.addEventListener('submit', handleCardFormSubmit);

function createCards() {
    initialCards.forEach(function(card) {
        const cardElement = createCard(card, deleteCard, likeCard, openImage);
        cardList.append(cardElement);
    });
};

function addCardToList(name, link) {
    const card = createCard({name, link}, deleteCard, likeCard, openImage);
    cardList.prepend(card);
};

function handleOpenModal(evt) {
    window.addEventListener('keydown', closeModalOnEscape);
    switch(evt.target) {
        case profileEditButton:
            nameInput.value = profileName.textContent;
            descriptionInput.value = profileDescription.textContent;
            openModal(profileEditModal);
            break;
        case newCardButton:
            openModal(newCardModal);
            break;
    }
};

function openImage(evt) {
    const imageModal = document.querySelector('.popup_type_image');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    const cardImage = evt.target.getAttribute('src');
    const cardCaption = evt.target.getAttribute('alt');
    window.addEventListener('keydown', closeModalOnEscape);

    openModal(imageModal);

    popupImage.setAttribute('src', cardImage);
    popupImage.setAttribute('alt', cardCaption);
    popupCaption.textContent = cardCaption;
};

function handleEditFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;

    closeModal(profileEditModal);
};

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    addCardToList(placeName.value, placeLink.value);

    closeModal(newCardModal);
    newCardForm.reset();
};
