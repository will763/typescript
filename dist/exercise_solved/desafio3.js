"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '';
function somarAoSaldo(add) {
    const value = +campoSaldo.innerHTML;
    campoSaldo.innerHTML = '' + (add + value);
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(+soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
    soma.value = '';
});
