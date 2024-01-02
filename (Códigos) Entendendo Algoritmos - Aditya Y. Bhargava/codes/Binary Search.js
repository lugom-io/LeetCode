const arr = new Array(100).fill().map((_, index) => index + 1);
let numeroMagico = 50; // número que está pesquisando

let min = 0;
let max = arr.length - 1; // precisa ser -1 pq o array começa com 0

while (max >= min) { // continue até que o max seja menor que o min ou o número seja encontrado
    let mid = Math.floor((max + min) / 2);
    let chute = arr[mid];

    if (chute == numeroMagico) {
        min = chute;
        break;
    } else if (chute > numeroMagico) {
        max = mid - 1; // -1 pq o array começa com 0
    } else {
        min = mid + 1; // +1 pq o array começa com 0
    }
}

console.log(min);