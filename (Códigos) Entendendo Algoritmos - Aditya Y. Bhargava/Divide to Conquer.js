/**
 * Esse algoritmo deve fazer a soma dos valores inteiros de um array
 * Deve ser utilizada recursão com o método DC (Dividir para conquistar).
 */

const arr = [10, 10];

function somarArray(x, soma) {
    if (x.length === 1) {
        return soma + x[0];
    } else {
        soma += x[0];
        x.shift();
        return somarArray(x, soma);
    }
}

console.log(somarArray(arr, 0));