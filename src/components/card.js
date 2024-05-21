import {initialCards} from './cards.js';

function createCard(card, deleteCallback) {
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

    return cardElement;
};

const cardList = document.querySelector('.places__list');

export function createCards() {
    initialCards.forEach(function(card) {
        const cardElement = createCard(card, deleteCard);
        cardList.append(cardElement);
    });
};

function deleteCard(event) {
    event.target.parentElement.remove();
};

