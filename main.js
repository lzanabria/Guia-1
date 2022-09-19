addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let a, b, c, ecua;
        const x=19;
        a=Number(prompt("Ingrese el valor de a: "));
        b=Number(prompt("Ingrese el valor de b: "));
        c=Number(prompt("Ingrese el valor de c: "));
        ecua=a*x**2+b*x+c;
        alert("El resultado de la ecuación a*x**2+b*x+c es: "+ecua);
    }, 500);
});