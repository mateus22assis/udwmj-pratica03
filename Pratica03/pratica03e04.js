function calcularArea(){
    const raio = document.getElementById("raio").value;
    if (raio === '' || isNaN(raio) || raio < 0) {
        document.getElementById('resultado').innerText = "por favor, insira um número válido e positivo para o raio";
        return;
    }
    const raioNumero = parseFloat(raio);
    const area = Math.PI * Math.pow(raioNumero, 2);
    document.getElementById('resultado').innerText = `A área do círculo é ${area.toFixed(2)}`;


}