//span-js
let span1 = document.querySelector(".span-js");
let text = ["Developer","Web"];
let i = 0;

function spanText() {
  span1.innerHTML = text[i];
  i++;

  if (i >= text.length) {
    i = 0;
  }

  setTimeout(function () {
    spanText();
  }, 1500);
}
spanText();

// nav bar
let icon = document.querySelector(".icon");
let nav = document.querySelector(".navbar");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");

icon.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  nav.classList.toggle("active");
});
