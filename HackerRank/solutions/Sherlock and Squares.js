// MATH
function squares(a, b) {
    const start = Math.ceil(Math.sqrt(a));
    const end = Math.floor(Math.sqrt(b));

    if(start > end) return 0;
    return end - start + 1;
}

// LOOP
function squares(a, b) {
    let squareIntCount = 0;
    let start = Math.floor(Math.sqrt(a));
    let end = Math.floor(Math.sqrt(b));

    for (let i = start; i <= end; i++) {
        const squareInt = i * i;
        if (squareInt >= a && squareInt <= b) squareIntCount++;
    }

    return squareIntCount;
}