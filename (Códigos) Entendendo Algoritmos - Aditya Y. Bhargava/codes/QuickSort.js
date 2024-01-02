function quickSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        let pivo = array[0];
        let menores = array.filter((x) => x < pivo);
        let maiores = array.filter((x) => x > pivo);
        return quickSort(menores).concat([pivo], quickSort(maiores));
    }
}

console.log(quickSort([1, 547, 95, 21, 3, 2, 4]));