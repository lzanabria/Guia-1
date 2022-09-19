addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let alto, ancho, largo, volumen;
        alto = prompt("Ingrese el alto del elipsoide: ");
        ancho = prompt("Ingrese el ancho del elipsoide: ");
        largo = prompt("Ingrese el largo del elipsoide: ");
        volumen = (4 / 3) * Math.PI * alto * ancho * largo;
        alert("El volumen del elipsoide es: " + volumen);
    }, 500);
});