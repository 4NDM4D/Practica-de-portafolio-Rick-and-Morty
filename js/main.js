const characterAPI = document.getElementById("cardList");
let ApiRickAndMorty = fetch("https://rickandmortyapi.com/api/character", {
    method: "GET"
}).then(res => {
    return res.json();
}).then(data => {
    let characters = data.results;
    console.log(characters);
    characters.forEach(character => { 
        const card = 
        `<section content="Rick and Morty character: ${character.name}">
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
<!--    
            <h3>Capitulos:</h3>
                <ul>
                    <li>${character.episode[0]}</li>
                    <li>${character.episode[1]}</li>
                    <li>${character.episode[2]}</li>
                    <li>${character.episode[3]}</li>
                </ul>
-->        
        </section>`;
    characterAPI.innerHTML += card;
    });
});
