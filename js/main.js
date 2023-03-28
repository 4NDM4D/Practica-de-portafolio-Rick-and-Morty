// Obtiene el elemento HTML con id "cardList"
const characterAPI = document.getElementById("cardList");

// Hace una solicitud GET a la API de Rick and Morty y obtiene los datos en formato JSON
let ApiRickAndMorty = fetch("https://rickandmortyapi.com/api/character", {
  method: "GET"
}).then(res => {
  return res.json();
}).then(data => {
  // Extraer los personajes de la respuesta de la API
  let characters = data.results;
  console.log(characters);
  // Iterar sobre cada personaje y crear una tarjeta HTML para él
  characters.forEach(character => { 
    const card = 
    `<section content="Rick and Morty character: ${character.name}" data-name="${character.name}" data-species="${character.species}" data-gender="${character.gender}" data-origin="${character.origin.name}">
      <div class="firstSectionCard">
        <h2>${character.name}</h2>
        <picture>
          <img src="${character.image}" alt="${character.name}">
        </picture>
        <div class="containerStatus">
          <p class="characterStatus">${character.status}</p>
        </div>
        <p class="cardDescription">Species: ${character.species}</p>
        <p class="cardDescription">Gender: ${character.gender}</p>
        <p class="cardDescription">Origin: ${character.origin.name}</p>
      </div>
    </section>`;
    // Agrega la tarjeta al elemento HTML con id "cardList"
    characterAPI.innerHTML += card;
  });
});

import { searchCharacter } from "./searchCharacter.js";
// Asignar el evento de carga "load" al elemento de entrada con clase "searchContainer"
const searchInput = document.querySelector(".searchContainer");
searchInput.addEventListener("load", searchCharacter);