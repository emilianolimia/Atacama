import "/js/menu-hamburger.js"
import { $menu } from "/js/menu-hamburger.js"

window.addEventListener("load", function () {

    //* Variables
    let enlaceAtacama = document.getElementById("enlace-atacama");
    let subMenu = document.querySelector(".submenu")
    let planDias4 = document.querySelector("#dias-4")
    let planDias5 = document.querySelector("#dias-5")
    let planDias6 = document.querySelector("#dias-6")
    let fraseInspiradora = document.getElementById("frase-inspiradora");
    let recuadros = document.getElementById("recuadros");

    //* Functions
    const enlaceAtacamaFn = () => {
        if (subMenu.classList.contains("selected")) {
            subMenu.classList.remove("selected")
        } else {
            subMenu.classList.add("selected")
        }
        subMenu.classList.toggle("none")
    }

    //* Listeners
    enlaceAtacama.addEventListener("click", enlaceAtacamaFn)



    //
    planDias4.addEventListener("click", () => {
        console.log("click")
        recuadros.classList.remove("none")
        $menu.classList.toggle("is-active");
        fraseInspiradora.style.display = "none"
    })

    planDias5.addEventListener("click", () => {
        console.log("click")
    })

    planDias6.addEventListener("click", () => {
        console.log("click")
    })



    // enlaceAtacama.addEventListener("click", function (event) {
    //     // event.preventDefault();
    //     // fraseInspiradora.style.display = "none";
    //     // recuadros.style.display = "flex";
    // });

    // // Efecto de los recuadros
    // let recuadrosItems = recuadros.getElementsByClassName("recuadro");
    // for (let i = 0; i < recuadrosItems.length; i++) {
    //     let recuadro = recuadrosItems[i];
    //     recuadro.style.animationDelay = (i * 1) + "s";
    //     recuadro.classList.add("recuadro");
    // }

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