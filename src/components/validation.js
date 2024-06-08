const showInputError = (formElement, inputElement, errorMessage, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(options.errorClass);
};

const hideInputError = (formElement, inputElement, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(options.inputErrorClass);
    errorElement.classList.remove(options.errorClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, options) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, options);
    } else {
      hideInputError(formElement, inputElement, options);
    }
};

const setEventListeners = (formElement, options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, options)
      });
    });
};

export const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, options);
    });
};