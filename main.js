addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let v1, v2, v3, comision, salario_total;
        const salario = 1000000, comi = 0.10;
        v1 = Number(prompt("Ingrese el valor de la venta 1: "));
        v2 = Number(prompt("Ingrese el valor de la venta 2: "));
        v3 = Number(prompt("Ingrese el valor de la venta 3: "));
        comision = (v1 + v2 + v3) * comi;
        salario_total = salario + comision;
        alert("El valor de la comisión es: $"+comision
        +"\nEl sueldo total es de: $"+salario_total);
    }, 500);
}); 