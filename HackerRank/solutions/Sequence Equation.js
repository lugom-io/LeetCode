// 1 SOLUTION
function permutationEquation(p) {
    let indexMap = new Map();

    for (let i = 0; i < p.length; i++) {
        indexMap.set(p[i], i + 1);
    }

    let y = [];

    for (const index of indexMap.values()) {
        y.push(indexMap.get(indexMap.get(index)));
    }

    return y;
}

// 2 SOLUTION
function permutationEquation(p) {
    let y = [];

    for (let x = 1; x <= p.length; x++) {
        y.push(p.indexOf(p.indexOf(x) + 1) + 1);
    }

    return y;
}

// 3 SOLUTION
function permutationEquation(p) {
    return p.map((_, idx) => p.indexOf(p.indexOf(idx + 1) + 1) + 1);
}