const containerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".darkmode");
const bodyEL = document.querySelector("body");

// Function to add images
const addimage = () => {
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 2000);
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${randomNumber}`;
    containerEl.appendChild(newImageEl);
  }
};

// Function to update body background color
const updateBody = () => {
  if (inputEl.checked) bodyEL.style.background = "slategray";
  else bodyEL.style.background = "white";
};

// To load More Images
btnEl.addEventListener("click", addimage);

// Save the toggle state to localStorage when changed
inputEl.addEventListener("input", () => {
  localStorage.setItem("darkMode", inputEl.checked);
  updateBody();
});

// Load the toggle state from localStorage on page load
window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode") === "true";
  inputEl.checked = darkMode;
  updateBody();
});
