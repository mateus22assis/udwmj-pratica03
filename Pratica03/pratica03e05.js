document.getElementById("calcular").onclick = function() {
    let raio = parseFloat(document.getElementById("raio").value);

    if(raio <= 0 || isNaN(raio)) {
         document.getElementById("resultado").innerText = "Número inválido. Por favor, insira um valor positivo para o raio.";
    } else {
        let volume = (4/3) * Math.PI * Math.pow(raio, 3);
        document.getElementById("resultado").innerText = "O volume da esfera é: " + volume.toFixed(2) + " cm³";
    }
}