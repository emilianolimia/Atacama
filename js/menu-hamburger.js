
const barrasMenu = document.querySelector('.barras__menu')
const line1 = document.querySelector(".linea-1__barra-menu")
const line2 = document.querySelector(".linea-2__barra-menu")
const line3 = document.querySelector(".linea-3__barra-menu")


const animateBarras = () => {
  line1.classList.toggle("activelinea-1__barra-menu")
  line2.classList.toggle("activelinea-2__barra-menu")
  line3.classList.toggle("activelinea-3__barra-menu")
  console.log("click");

  //. para integrarlo con un menu por ej:
  // container__menu.classList.toggle("menu__active");

}

export { barrasMenu, line1, line2, line3, animateBarras }





