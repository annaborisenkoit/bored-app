const NEW_DESK = 'Ура, теперь не скучно 🔥';

const bannerNode = document.querySelector('.banner');
const deskNode = document.querySelector('.js-desk');
const titleNode = document.querySelector('.js-title');
const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', () => {
  fetch('https://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((res) => {
      deskNode.innerText = `${res.activity}!`;
      renderNewBanner();
    });
});

function renderNewBanner() {
  bannerNode.classList.add('.banner-new');
  titleNode.innerHTML = NEW_DESK;
}
