const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const title = document.querySelector('main h1');
const image = document.querySelector('.box img');
const details = document.querySelectorAll('.box p');

searchButton.addEventListener('click', () => {
  const name = searchInput.value.trim();
  if (!name) {
    return;
  }