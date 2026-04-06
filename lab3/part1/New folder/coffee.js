* Author: John Doe
 * Date: 2026-04-06
 * Version: 1.0


const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Correct array
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through images
for (const filename of images) {
  const newImage = document.createElement("img");

  newImage.src = ${baseURL}{ image.filename};
  newImage.alt = image.alt;
   newImage="0";

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", updateDisplayedImage);

  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// Update main image
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Button toggle
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.classList.replace("dark", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.classList.replace("light", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  btn.classlist.toggle("dark")
});
