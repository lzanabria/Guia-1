addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let porc_iva, val_prod, val_iva, val_total;
        porc_iva = Number(prompt("Ingrese el porcentaje de IVA (sólo número): "));
        val_prod = Number(prompt("Ingrese el valor del producto : $ "));
        val_iva = val_prod * porc_iva / 100;
        val_total = val_prod + val_iva;
        alert("El valor del IVA de este producto es de: $"+val_iva);
        alert("El valor total del producto es de: $"+val_total);
    }, 500);
});