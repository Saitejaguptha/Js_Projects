const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remaningEl = document.getElementById("remaining-counter");

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remaningEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

updateCounter();

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
