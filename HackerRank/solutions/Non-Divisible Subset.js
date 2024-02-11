function nonDivisibleSubset(k, s) {
    let rest = new Array(k).fill(0);
    for (const num of s) {
        let index = num % k;
        rest[index]++;
    }

    let ans = Math.min(rest[0], 1);
    let maxSize = Math.floor(k / 2);

    if (k % 2 == 0) ans += Math.min(rest[maxSize], 1);

    for (let i = 1; i <= maxSize; i++) {
        if (i != k - i) ans += Math.max(rest[i], rest[k - i]);
    }
    
    return ans;
}