addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let c1, c2, c3, c4, prom;
        c1 = Number(prompt("Ingrese la nota 1: "));
        c2 = Number(prompt("Ingrese la nota 2: "));
        c3 = Number(prompt("Ingrese la nota 3: "));
        c4 = Number(prompt("Ingrese la nota 4: "));
        prom = (c1 + c2 + c3 + c4) / 4;
        alert("El promedio de las calificaciones obtenidas es: " + prom);
    }, 500);
}); 