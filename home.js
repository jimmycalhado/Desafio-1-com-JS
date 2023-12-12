function somatorioDivisiveisPor3ou5(numero) {
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }

function calcularSomatoria() {
    const inputNumero = document.getElementById('numero');
    const resultadoElemento = document.getElementById('resultado');

    const numero = parseInt(inputNumero.value, 10) || 0;
    const resultadoCalculado = somatorioDivisiveisPor3ou5(numero);

    resultadoElemento.textContent = `O somatório é: ${resultadoCalculado}`;
}