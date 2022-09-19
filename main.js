addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let grad_c, conv;
        grad_c=Number(prompt("Ingrese el valor de la temperatura en °C: "));
        conv=(grad_c*9/5)+32;
        alert("La temperatura convertida en °F es: "+conv);
    }, 500);
});