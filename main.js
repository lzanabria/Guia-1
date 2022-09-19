addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let radio, altura, area, volumen;
        radio=Number(prompt("Ingrese el radio del cilindro: "));
        altura=Number(prompt("Ingrese la altura del cilindro: "));
        area=(2*(Math.PI*radio**2))+((2*Math.PI*radio*altura)*altura);
        volumen=(Math.PI*radio**2)*altura;
        alert("El área del cilindro es: "+area);
        alert("El volumen del cilindro es: "+volumen);
    }, 500);
});