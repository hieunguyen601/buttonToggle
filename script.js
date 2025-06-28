const buttonElement = document.querySelector('.buttonToggle');
const bodyElement = document.querySelector('body');

buttonElement.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');
});