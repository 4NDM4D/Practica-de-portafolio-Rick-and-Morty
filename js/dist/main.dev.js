"use strict";

var characterAPI = document.getElementById("cardList");
var ApiRickAndMorty = fetch("https://rickandmortyapi.com/api/character", {
  method: "GET"
}).then(function (res) {
  return res.json();
}).then(function (data) {
  var characters = data.results;
  console.log(characters);
  characters.forEach(function (character) {
    var card = "<section content=\"Rick and Morty character: ".concat(character.name, "\">\n            <div class=\"firstSectionCard\">\n                \n                <h2>").concat(character.name, "</h2>\n                \n                <picture>\n                    <img src=\"").concat(character.image, "\" alt=\"").concat(character.name, "\">\n                </picture>\n\n                <div class=\"containerStatus\">\n                    <p class=\"characterStatus\">").concat(character.status, "</p>\n                </div>\n\n                <p class=\"cardDescription\">Species: ").concat(character.species, "</p>\n                <p class=\"cardDescription\">Gender: ").concat(character.gender, "</p>\n                <p class=\"cardDescription\">Origin: ").concat(character.origin.name, "</p>\n                \n            </div>\n<!--    \n            <h3>Capitulos:</h3>\n                <ul>\n                    <li>").concat(character.episode[0], "</li>\n                    <li>").concat(character.episode[1], "</li>\n                    <li>").concat(character.episode[2], "</li>\n                    <li>").concat(character.episode[3], "</li>\n                </ul>\n-->        \n        </section>");
    characterAPI.innerHTML += card;
  });
});