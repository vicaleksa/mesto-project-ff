function addCard(card, deleteCallback) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardDescription = cardElement.querySelector('.card__description');
    const likeButton = cardDescription.querySelector('.card__like-button');
    const cardList = document.querySelector('.places__list');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__image').setAttribute('src', card.link);
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