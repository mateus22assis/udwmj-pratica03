function calcular() {
    let capital = document.getElementById("capital").value;
    let taxa = document.getElementById("taxa").value;
    let prazo = document.getElementById("prazo").value;

    capital = parseFloat(capital);
    taxa = parseFloat(taxa) / 100;
    prazo = parseInt(prazo);

    let montante = capital * Math.pow(1 + taxa, prazo);

    document.getElementById("resultado").innerText =
        "Montante final: R$ " + montante.toFixed(2);
}
