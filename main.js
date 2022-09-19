addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let base, altura, area;
        base = prompt("Ingrese la base del triángulo: ");
        altura = prompt("Ingrese la altura del triángulo: ");
        area = (base * altura) / 2;
        alert("El área del triángulo es: "+area);
    }, 500);
});