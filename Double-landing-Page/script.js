const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

// Event listeners for the left section
leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
});

// Event listeners for the right section
rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-right");
});
