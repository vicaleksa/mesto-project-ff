function addCard(card, deleteCallback) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardDescription = cardElement.querySelector('.card__description');
    const likeButton = cardDescription.querySelector('.card__like-button');
    const cardList = document.querySelector('.places__list');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);
    cardDescription.querySelector('.card__title').textContent = card.name;

    deleteButton.addEventListener('click', deleteCallback);

    cardList.append(cardElement);
};

initialCards.forEach(function(card) {
    addCard(card, deleteCard);
});

function deleteCard(event) {
    event.target.parentElement.remove();
};