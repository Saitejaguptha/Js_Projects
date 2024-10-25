// Select the element with the class "container" to display the career text
const containerEl = document.querySelector(".container");

// Array of career options to display
const carrers = [
  "YouTuber",
  "Freelancer",
  "Web Developer",
  "What Not everything",
];

// Indexes to track the current career in the array and  current character in the career string
let carrersIndex = 0;
let charecterIndex = 0;

// Function to update the displayed text
function upadatetext() {
  // Increment the character index to display the next character
  charecterIndex++;

  // Update the inner HTML of the container with the current career string up to the character index
  containerEl.innerHTML = `
    <div class="container">
      <h1>I am ${carrers[carrersIndex].slice(0, charecterIndex)}</h1>
    </div>`;

  // If the entire career string has been displayed Move to the next career  and Reset character index to start from the beginning of the next career
  if (charecterIndex === carrers[carrersIndex].length) {
    carrersIndex++;
    charecterIndex = 0;
  }

  // If all careers have been displayed, reset to the first career
  if (carrersIndex === carrers.length) carrersIndex = 0;

  // Call the function again after 400 milliseconds to continue the text update
  setTimeout(upadatetext, 400);
}

// Start the text update process
upadatetext();
