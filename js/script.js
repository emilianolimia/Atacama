import { barrasMenu, line1, line2, line3, animateBarras } from './menu-hamburger.js'

window.addEventListener("load", function () {

    //* Variables


    //* Functions


    //* Listeners

    barrasMenu.addEventListener('click', animateBarras)




    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");

    preloader.style.display = "none"; // Ocultar el preloader
    content.style.display = "block"; // Mostrar el contenido una vez que todas las imágenes estén cargadas

    let fraseInspiradora = document.getElementById("frase-inspiradora");
    let recuadros = document.getElementById("recuadros");

    // Evento de clic en el enlace "Atacama"
    let enlaceAtacama = document.getElementById("enlace-atacama");

    enlaceAtacama.addEventListener("click", function (event) {
        event.preventDefault();
        fraseInspiradora.style.display = "none";
        recuadros.style.display = "flex";
    });

    // Efecto de los recuadros
    let recuadrosItems = recuadros.getElementsByClassName("recuadro");
    for (let i = 0; i < recuadrosItems.length; i++) {
        let recuadro = recuadrosItems[i];
        recuadro.style.animationDelay = (i * 1) + "s";
        recuadro.classList.add("recuadro");
    }

    // Evento de clic en el logo
    let logo = this.document.getElementById("logo");
    logo.addEventListener("click", function (event) {
        event.preventDefault();
        recuadros.style.display = "none";
        fraseInspiradora.style.display = "flex";
    })

    // Efecto imágenes
    let images = document.querySelectorAll("#background-images img");
    let currentIndex = 0;

    for (let i = 1; i < images.length; i++) {
        images[i].style.opacity = "0";
    }

    function showNextImage() {
        images[currentIndex].style.opacity = "0";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = "1";
    }

    setInterval(showNextImage, 7000);
});