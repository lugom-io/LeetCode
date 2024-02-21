function arrayManipulation(n, queries) {
    let mapIntervals = new Map();

    for (const [a, b, k] of queries) {
        mapIntervals.set(a, (mapIntervals.get(a) || 0) + k);
        mapIntervals.set(b + 1, (mapIntervals.get(b + 1) || 0) - k);
    }

    let max = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += mapIntervals.get(i) || 0;
        max = Math.max(max, sum);
    }

    return max;
}