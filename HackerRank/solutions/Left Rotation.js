//SOLUTION 1
function rotateLeft(d, arr) {
    return [...arr.slice(d), ...arr.slice(0, d)];
}

// SOLUTION 2
function rotateLeft(d, arr) {
    const n = arr.length;
    let rotatedArr = [];

    for (let i = 0; i < n; i++) {
        rotatedArr.push(arr[(i + d) % n]);
    }

    return rotatedArr;
}

//SOLUTION 3
function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        let temp = arr.shift();
        arr.push(temp);
    }

    return arr;
}