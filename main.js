addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let min, val, iva, imp, pago;
        min=Number(prompt("Ingrese el tiempo de la llamada en minutos: "));
        val=Number(prompt("Ingrese el valor por minuto: "));
        iva=Number(prompt("Ingrese el valor del IVA: "));
        imp=val*iva/100;
        pago=val+imp;
        alert("El valor de la llamada es de : $"+pago);
    }, 500);
});