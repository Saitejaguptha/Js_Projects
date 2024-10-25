// Select elements from the DOM
const monthEl = document.querySelector(".month-name");
const yearEl = document.querySelector(".year");
const daynumberEl = document.querySelector(".day-number");
const daynameEl = document.querySelector(".day-name");
const btn = document.querySelector(".btn");

// Create a new Date object for the current date
const date = new Date();

// Get the current day, day name, month name, and year
const day = date.toLocaleDateString("en-US", { day: "2-digit" });
const dayword = date.toLocaleDateString("en-US", { weekday: "long" });
const month = date.toLocaleDateString("en-US", { month: "long" });
const year = date.getFullYear();

// Update the respective elements with the current date information
monthEl.textContent = month;
yearEl.textContent = year;
daynumberEl.textContent = day;
daynameEl.textContent = dayword;

// Define the function to show the current date when the button is clicked
const showDate = (event) => {
  event.preventDefault();
  btn.textContent = date.toLocaleString();
  btn.classList.add("no-hover");
  // Remove the click event listener to prevent further clicks
  btn.removeEventListener("click", showDate);
};

// Add the click event listener to the button
btn.addEventListener("click", showDate);
