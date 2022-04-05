const poke_container = document.getElementById('poke-container');
const pokemon_count = 21;

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#d3d3d3',
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();

  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('pokemon');

  const displayName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const displayId = pokemon.id.toString().padStart(3, '0');

  const poke_types = pokemon.types.map((type) => type.type.name);
  const displayType = main_types.find((type) => poke_types.indexOf(type) > -1);

  const displayColor = colors[displayType];
  cardElement.style.backgroundColor = displayColor;

  cardInnerHTML = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="bulbasaur">
    </div>
    <div class="info">
        <span class="number">#${displayId}</span>
        <h3 class="name">${displayName}</h3>
        <small class="type">Type: <span>${displayType}</span></small>
    </div>
  `;

  cardElement.innerHTML = cardInnerHTML;

  poke_container.appendChild(cardElement);
};

fetchPokemons();
