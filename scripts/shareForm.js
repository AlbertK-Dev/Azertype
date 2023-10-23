let btnPartage = document.querySelector(".appblock__zonePartage button");
let overlayForm = document.querySelector(".overlay");
let overlayCrossClose = document.querySelector(".overlay__Close");
btnPartage.addEventListener("click", () => {
  overlayForm.style.display = "block";
});

overlayCrossClose.addEventListener("click", () => {
  overlayForm.style.display = "none";
});
