function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // i + j % k === 0
    // i < j && (ar[i] + ar[j]) % k === 0

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (i < j && (ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}