function buscaMaior(values) {
    let maior = 0;
    let maior_indice = 0;
    for(let i = 0; i < values.length; i++){
        if(values[i] > maior){
            maior = values[i];
            maior_indice = i;
        }
    }
    return maior_indice;
}

function ordenarDecrescente(values){
    let valuesSorted = [];
    let len = values.length

    for(let i = 0; i < len; i++){
        let maior = buscaMaior(values);
        valuesSorted.push(parseInt(values.splice(maior, 1)));
    }

    return valuesSorted;
}



let values = [1,3,2];
console.log(ordenarDecrescente(values));