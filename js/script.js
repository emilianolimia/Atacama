window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");
  
    preloader.style.display = "none"; // Ocultar el preloader
    content.style.display = "block"; // Mostrar el contenido una vez que todas las imágenes estén cargadas

    var fraseInspiradora = document.getElementById("frase-inspiradora");
    var recuadros = document.getElementById("recuadros");

    // Evento de clic en el enlace "Atacama"
    var enlaceAtacama = document.getElementById("enlace-atacama");
    
    enlaceAtacama.addEventListener("click", function(event) {
        event.preventDefault();
        fraseInspiradora.style.display = "none";
        recuadros.style.display = "flex";
    });

    // Efecto de los recuadros
    var recuadrosItems = recuadros.getElementsByClassName("recuadro");
    for (var i = 0; i < recuadrosItems.length; i++) {
        var recuadro = recuadrosItems[i];
        recuadro.style.animationDelay = (i * 1) + "s";
        recuadro.classList.add("recuadro");
    }

    // Evento de clic en el logo
    var logo = this.document.getElementById("logo");
    logo.addEventListener("click", function(event) {
        event.preventDefault();
        recuadros.style.display = "none";
        fraseInspiradora.style.display = "flex";
    })

    // Efecto imágenes
    var images = document.querySelectorAll("#background-images img");
    var currentIndex = 0;

    for (var i = 1; i < images.length; i++) {
        images[i].style.opacity = "0";
    }

    function showNextImage() {
        images[currentIndex].style.opacity = "0";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = "1";
    }

    setInterval(showNextImage, 7000);
});