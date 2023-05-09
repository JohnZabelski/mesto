const popupElement = document.querySelector('.popup');
const profilePopupElement = document.querySelector('.profile__button');
const popupcloseElement = document.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-input_text_title');
const jobInput = document.querySelector('.popup__form-input_text_subtitle');
const openPopup = function () {
    popupElement.classList.add('popup_opened');
    setPopupInputValue();
}
const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}


function setPopupInputValue() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function setTextValue() {
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    setTextValue();
    closePopup();
}


profilePopupElement.addEventListener('click', openPopup);
popupcloseElement.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit); 