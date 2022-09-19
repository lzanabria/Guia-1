addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let nom_ape, h_trab, sueldo;
        const pago_h=15300;

        nom_ape = prompt("Ingrese su nombre y apellido: ");
        h_trab=Number(prompt("Ingrese las horas trabajadas: "));
        sueldo=h_trab*pago_h;
        alert("Empleado: "+nom_ape
            +"\nHoras trabjadas: "+h_trab
            +"\nValor pago por hora: $"+pago_h
            +"\nSueldo: $"+sueldo);
    }, 500);
}); 