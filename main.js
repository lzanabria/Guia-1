addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let radio, logitud, area;
        radio=Number(prompt("Ingrese el radio del círculo: "));
        longitud=2*Math.PI*radio;
        area=Math.PI*(radio**2);
        alert("La longitud del círculo es: "+longitud);
        alert("El área del círculo es: "+area);
    }, 500);
});