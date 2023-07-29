
/* ********** Menu ********** */

const $btnMenu = document.querySelector(".menu-btn")
export const $menu = document.querySelector("#menu")
const $fraseInspiradora = document.querySelector("#frase-inspiradora")

$btnMenu.addEventListener("click", (e) => {
  $btnMenu.firstElementChild.classList.toggle("none");
  $btnMenu.lastElementChild.classList.toggle("none");
  $menu.classList.toggle("is-active");
  $fraseInspiradora.classList.toggle("hidden")
});















