addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let base, altura, area;

        base = Number(prompt("Ingrese la base del rectángulo: "));
        altura = Number(prompt("Ingrese la altura del rectángulo: "));
        area = base * altura;

        alert("El área del rectángulo es: " + area)
    }, e.timeStamp);
});