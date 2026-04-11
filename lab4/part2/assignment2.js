const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
// =========================================
// Thumbnails Gallery Project
// Handles image switching and thumbnail interaction
// Updates main preview when thumbnails are clicked
//Author: Eric
// =========================================

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const filename of images) {
  const newImage = document.createElement("img");

  newImage.src = baseURL + filename;
  newImage.alt = filename;
  newImage.tabIndex = "0";

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", updateDisplayedImage);

  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () => {
  const isDark = btn.classList.contains("dark");

  btn.classList.toggle("dark");
  btn.classList.toggle("light");

  btn.textContent = isDark ? "Lighten" : "Darken";
  overlay.style.backgroundColor = isDark ? "rgba(0, 0, 0, 0.5)": "rgba(0, 0, 0, 0)";
});
