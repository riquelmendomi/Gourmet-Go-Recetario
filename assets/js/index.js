document.addEventListener("DOMContentLoaded", () => {

  /* MODAL DE RECETAS */

  const modal = document.getElementById("recipeModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const closeModal = document.querySelector(".close-modal");

  document.querySelectorAll(".card-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".recipe-card");
      const img = card.querySelector("img");
      const title = card.querySelector("h5");

      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = title.textContent;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  /* BUSCADOR  */

  const searchInput = document.getElementById("searchInput");
  const recipeCards = document.querySelectorAll(".recipe-card");

  searchInput.addEventListener("keyup", () => {
    const searchText = searchInput.value.toLowerCase();

    recipeCards.forEach(card => {
      const title = card.querySelector("h5").textContent.toLowerCase();

      if (title.includes(searchText)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });

});
