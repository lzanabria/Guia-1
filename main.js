addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let a, b, c, expression;
        a = Number(prompt("Ingrese el valor de a: "));
        b = Number(prompt("Ingrese el valor de b: "));
        c = Number(prompt("Ingrese el valor de c: "));
        expresion = (a + 7 * c) / (b + 2 - a) + 2 * b;
        alert("El resultado de la expresión (a+7*c)/(b+2-a)+2*b es: " + expresion);
    }, 500);
});