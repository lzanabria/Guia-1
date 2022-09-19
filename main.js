addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let nota1, nota2, nota3, exam_fin, trab_fin, prom_parc, prom_examf, prom_trabf, promf;
        
        nota1 = Number(prompt("Ingrese la nota del parcial 1: "));
        nota2 = Number(prompt("Ingrese la nota del parcial 2: "));
        nota3 = Number(prompt("Ingrese la nota del parcial 3: "));
        exam_fin = Number(prompt("Ingrese la nota del examen final: "));
        trab_fin = Number(prompt("Ingrese la nota del trabajo final: "));

        prom_parc = ((nota1 + nota2 + nota3) / 3) * 0.55;
        prom_examf = exam_fin * 0.30;
        prom_trabf = trab_fin * 0.15;
        promf = prom_parc + prom_examf + prom_trabf;

        alert("El promedio final es: " + promf);
    }, 500);
});