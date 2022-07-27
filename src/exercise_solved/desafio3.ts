let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = ''

function somarAoSaldo(add: number) {
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