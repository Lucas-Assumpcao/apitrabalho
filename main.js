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

    fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
      const character = data.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (!character) {
        alert('Personagem não encontrado.');
        return;
      }

      title.textContent = character.name;
      image.src = character.image || '';
      image.alt = character.name;
      details[0].textContent = `Espécie: ${character.species || 'N/A'}`;
      details[1].textContent = `Gênero: ${character.gender || 'N/A'}`;
      details[2].textContent = `Linhagem: ${character.ancestry || 'N/A'}`;
      details[3].textContent = `Casa: ${character.house || 'N/A'}`;
    })
    .catch(error => {
      console.error('Erro ao buscar personagem:', error);
      alert('Erro ao buscar personagem.');
    });
});
