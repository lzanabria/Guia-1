addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n1, n2, n3, n4, media;
        n1=Number(prompt("Ingrese el valor del número 1: "));
        n2=Number(prompt("Ingrese el valor del número 2: "));
        n3=Number(prompt("Ingrese el valor del número 3: "));
        n4=Number(prompt("Ingrese el valor del número 4: "));
        media=(n1+n2+n3+n4)/4;
        alert("La media de los números es: "+media);
    }, 500);
});