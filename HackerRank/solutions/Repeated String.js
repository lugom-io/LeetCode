function repeatedString(s, n) {
    const size = s.length;
    let countA = 0;
    let restCountA = 0;

    for (let i = 0; i < size; i++) {
        const isA = s[i] === 'a';

        if (isA) countA++;
        if (isA && i < n % size) restCountA++;
    }

    return countA * Math.floor(n / size) + restCountA;
}