const bodyEl = document.querySelector("body");

// Add an event listener for the mouse movement over the body element
bodyEl.addEventListener("mousemove", (event) => {
  // Get the horizontal and vertical position of the mouse cursor
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  // Create a new span element that will be added to the body
  const spanEl = document.createElement("span");

  // Set the position of the span element using the mouse coordinates
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  // Generate a random size for the span element, ranging from 0 to 100 pixels
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // Set a timeout to remove the span element from the DOM after 3 seconds
  setTimeout(() => spanEl.remove(), 3000);

  // Append the newly created span element to the body
  bodyEl.appendChild(spanEl);
});
