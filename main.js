addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let vel_km, vel_ms;
        vel_km = prompt("Ingrese la velocidad del automóvil en km/h: ");
        vel_ms = vel_km / 3.6;
        alert("La velocidad del automóvil en m/s es: " + vel_ms);
    }, 500);
});