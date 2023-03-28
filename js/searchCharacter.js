function searchCharacter() {
  // Obtener el texto de búsqueda del elemento de entrada
  const searchValue = document.querySelector(".searchContainer").value.toLowerCase();

  // Obtener todos los elementos de sección (tarjetas de personaje)
  const sections = document.querySelectorAll("section");

  // Iterar sobre cada sección y ocultarla si no hay una coincidencia con el texto de búsqueda
  sections.forEach(section => {
    const name = section.getAttribute("data-name").toLowerCase();
    const species = section.getAttribute("data-species").toLowerCase();
    const gender = section.getAttribute("data-gender").toLowerCase();
    const origin = section.getAttribute("data-origin").toLowerCase();
    if (name.includes(searchValue) || species.includes(searchValue) || gender.includes(searchValue) || origin.includes(searchValue)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

export { searchCharacter };