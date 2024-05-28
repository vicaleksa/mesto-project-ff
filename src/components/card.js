import {initialCards} from './cards.js';

function createCard(card, deleteCallback, likeCallback, openImageCallback) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardDescription = cardElement.querySelector('.card__description');
    const likeButton = cardDescription.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);
    cardDescription.querySelector('.card__title').textContent = card.name;

    deleteButton.addEventListener('click', deleteCallback);
    likeButton.addEventListener('click', likeCallback);
    cardImage.addEventListener('click', openImageCallback);

    return cardElement;
};

const cardList = document.querySelector('.places__list');

export function createCards() {
    initialCards.forEach(function(card) {
        const cardElement = createCard(card, deleteCard, likeCard, openImage);
        cardList.append(cardElement);
    });
};

export function addCardToList(name, link) {
    const card = createCard({name, link}, deleteCard, likeCard, openImage);
    cardList.prepend(card);
};

function deleteCard(evt) {
    evt.target.parentElement.remove();
};

function likeCard(evt) {
    evt.currentTarget.classList.toggle('card__like-button_is-active');
};

function openImage(evt) {
    const imageModal = document.querySelector('.popup_type_image');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    const cardImage = evt.target.getAttribute('src');
    const cardCaption = evt.target.getAttribute('alt');

    imageModal.classList.add('popup_is-opened');
    imageModal.classList.add('popup_is-animated');

    popupImage.setAttribute('src', cardImage);
    popupImage.setAttribute('alt', cardCaption);
    popupCaption.textContent = cardCaption;
};
