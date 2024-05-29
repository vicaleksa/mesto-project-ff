export function createCard(card, deleteCallback, likeCallback, openImageCallback) {
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

export function deleteCard(evt) {
    evt.target.parentElement.remove();
};

export function likeCard(evt) {
    evt.currentTarget.classList.toggle('card__like-button_is-active');
};
