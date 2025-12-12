// Espera a que todo el HTML esté cargado antes de ejecutar el JS
// (evita errores si el script se carga antes que el DOM)
document.addEventListener("DOMContentLoaded", () => {

  // Captura el input del buscador usando su ID
  const searchInput = document.getElementById("searchInput");

  // Selecciona todas las tarjetas de recetas
  const recipeCards = document.querySelectorAll(".recipe-card");

  // Escucha cada vez que el usuario escribe o borra algo en el input (en el teclado)
  searchInput.addEventListener("keyup", () => {

    // Obtiene el texto escrito y lo pasa a minúsculas
    // (así no importa si escriben "Pollo" o "pollo")
    const searchText = searchInput.value.toLowerCase();

    // Recorre todas las cards una por una
    recipeCards.forEach(card => {

      // Obtiene el título de la receta (el h5) y lo pasa a minúsculas
      const title = card.querySelector("h5").textContent.toLowerCase();

      // Compara si el texto escrito está dentro del título
      if (title.includes(searchText)) {

        // Si coincide, muestra la card
        card.parentElement.style.display = "block";

      } else {

        // Si NO coincide, oculta la card
        card.parentElement.style.display = "none";
      }
    });
  });
});