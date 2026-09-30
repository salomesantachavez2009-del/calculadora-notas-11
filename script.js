function calcular() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    if (
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        document.getElementById("resultado").innerHTML =
            "Las notas deben estar entre 0 y 5.";
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 3) {
        document.getElementById("resultado").innerHTML =
            "Promedio: " + promedio.toFixed(2) + "<br>Aprobado";
    } else {
        document.getElementById("resultado").innerHTML =
            "Promedio: " + promedio.toFixed(2) + "<br>No aprobado";
    }
}
