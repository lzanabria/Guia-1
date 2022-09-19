addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let valor, desc, val_desc, pago_fin;
        valor = Number(prompt("Ingrese el valor del medicamento: "));
        desc = Number(prompt("Ingrese el porcentaje de descuento: "));
        val_desc = (valor * desc) / 100;
        pago_fin = (valor - val_desc);
        alert("El descuento es de: $" + val_desc);
        alert("El pago final es de: $" + pago_fin);
    }, 500);
});