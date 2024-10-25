const serachBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  serachBarContainerEl.classList.toggle("active");
});
