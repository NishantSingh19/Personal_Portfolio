let lines = document.querySelector(".lines");
let cross = document.querySelector(".cross");
let nav = document.querySelector(".nav");
let nav_lists = document.querySelector(".lists");
let sidebar = document.querySelector(".sidebar");
let section = document.querySelector("section");
let body = document.body;
let proImage = document.querySelectorAll(".pro_img");
let preview = document.getElementById("preview");
let previewImg = document.getElementById("previewImage");
let closeBtn = document.getElementById("closeBtn");

sidebar.append(nav_lists);
sidebar.append(cross);

cross.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

lines.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// proImage.forEach((img) => {
//   img.addEventListener("click", () => {
//     preview.style.display = "flex";
//     previewImg.src = img.src;
//   });
// });

// closeBtn.addEventListener("click", () => {
//   preview.style.display = "none";
// });
