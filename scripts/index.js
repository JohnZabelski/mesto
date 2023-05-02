const popupElement = document.querySelector('.popup');
const profilepopupElement = document.querySelector('.profile__button');
const popupcloseElement = document.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-input-title');
const jobInput = document.querySelector('.popup__form-input-subtitle');

const togglePopupVisibility = function () {
    popupElement.classList.add('popup__opened');
}
const togglePopupUnVisibility = function () {
    popupElement.classList.remove('popup__opened');
}

profilepopupElement.addEventListener('click', togglePopupVisibility);
popupcloseElement.addEventListener('click', togglePopupUnVisibility);

function setPopupInputValue() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function setTextValue() {
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

profilepopupElement.addEventListener('click', function ()  {
            setPopupInputValue();
            togglePopupVisibility(popupElement);
    });

function handleFormSubmit (evt) {
    evt.preventDefault();
    setTextValue();
    togglePopupUnVisibility(popupElement);
}


formElement.addEventListener('submit', handleFormSubmit); 