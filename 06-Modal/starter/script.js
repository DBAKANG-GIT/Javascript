"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
let btnOpenModal = document.querySelector(".show-modal"); //only the first one would be selected
btnOpenModal = document.querySelectorAll(".show-modal"); //all which match the name would be selected.

for (const element of btnOpenModal) {
  // Add event listeners
  element.addEventListener("click", function () {
    console.log(element.textContent);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  console.log("Exit button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Esc Key
document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    //if the modal is not
    closeModal();
  }
});
