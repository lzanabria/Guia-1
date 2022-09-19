addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let radio, volumen;
        radio = Number(prompt("Ingrese el radio de la esfera: "));
        volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
        alert("El volumen de la esfera es: " + volumen);
    }, 500);
});