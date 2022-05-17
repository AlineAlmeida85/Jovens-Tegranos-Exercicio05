
function calcular() {    

    let valorRaio = document.getElementById("inputRaio").value;
    let π = 3.14159;
    let area = π * (valorRaio * valorRaio);

    valorArea.innerHTML = area.toFixed(3);

}