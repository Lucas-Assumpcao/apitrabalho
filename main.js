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
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }
      return response.json();
    })
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

// Adiciona funcionalidade aos botões de navegação (voltar e avançar)
const backButton = document.querySelector('.buttons button:first-child');
const forwardButton = document.querySelector('.buttons button:last-child');
let currentIndex = -1;
let characters = [];

backButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayCharacter(characters[currentIndex]);
  }
});

forwardButton.addEventListener('click', () => {
  if (currentIndex < characters.length - 1) {
    currentIndex++;
    displayCharacter(characters[currentIndex]);
  }
});

function displayCharacter(character) {
  title.textContent = character.name;
  image.src = character.image || '';
  image.alt = character.name;
  details[0].textContent = `Espécie: ${character.species || 'N/A'}`;
  details[1].textContent = `Gênero: ${character .gender || 'N/A'}`;
  details[2].textContent = `Linhagem: ${character.ancestry || 'N/A'}`;
  details[3].textContent = `Casa: ${character.house || 'N/A'}`;
}

// Carrega todos os personagens para navegação
fetch('https://hp-api.onrender.com/api/characters')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    characters = data;
    if (characters.length > 0) {
      currentIndex = 0;
      displayCharacter(characters[currentIndex]);
    }
  })
  .catch(error => {
    console.error('Erro ao carregar personagens:', error);
    alert('Erro ao carregar personagens.');
  });    

  // quando nao tem foto do personagem, exibe uma imagem padrão
  image.addEventListener('error', () => {
    image.src = 'cage.jpg'; //
    image.alt = 'Imagem não disponível';

  });