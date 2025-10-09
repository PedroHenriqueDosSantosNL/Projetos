function cliqueiNoBotao() {
    const valorInput = document.getElementById('valorParaConversao');
    const valor = parseFloat(valorInput.value.replace(',', '.'));

    document.getElementById('valorVariavelInicial').textContent = valor.toFixed(2);
    document.getElementById('valorVariavelFinal').textContent = (valor / 5.43).toFixed(2);
}
