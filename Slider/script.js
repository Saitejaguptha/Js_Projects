// Select the DOM elements for username, image, and text
const usernameEl = document.querySelector(".user-name");
const imgEl = document.querySelector(".image");
const textEl = document.querySelector(".text");
let idx = 0; // Initialize index to keep track of the current testimonial

// Array of testimonial objects, each containing a name, photo URL, and text
const testimonial = [
  {
    name: "Saiteja",
    photoUrl: "user.png",
    text: "mobile phone is the ultimate time saver for small business owners like me.",
  },
  {
    name: "Vishwanath",
    photoUrl: "user1.png",
    text: "laptops is exactly what I've been looking for.",
  },
  {
    name: "Gowtham",
    photoUrl: "user2.png",
    text: "We can't understand how we've been living without cars.",
  },
  {
    name: "Chandrakanth",
    photoUrl: "user3.png",
    text: "comedy movies has really helped our business. Definitely worth the investment. Thank you!",
  },
];

// Function to update the testimonial displayed on the page
updateTestimonial = () => {
  // Destructure the current testimonial object to get name, photo, and text
  const { name, photoUrl, text } = testimonial[idx];

  // Update the image source, username, and text content in the DOM
  imgEl.src = photoUrl;
  usernameEl.innerText = name;
  textEl.innerText = text;

  // Increment the index to point to the next testimonial
  idx++;

  // If the index reaches the end of the array, reset it to loop back to the first testimonial
  if (idx === testimonial.length) idx = 0;

  // Call the updateTestimonial function again after 5000 milliseconds (5 seconds)
  setTimeout(updateTestimonial, 5000);
};

// Initial call to start the testimonial updates
updateTestimonial();
