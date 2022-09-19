addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let espacio, tiempo, velocidad, conv;
        espacio=Number(prompt("Ingrese el espacio recorrido en Km: "));
        tiempo=Number(prompt("Ingrese el tiempo en minutos: "));
        velocidad=espacio/tiempo;
        conv=velocidad*16.667;
        alert("La velocidad del proyectil es de: "+conv+" m/s");
    }, 500);
});