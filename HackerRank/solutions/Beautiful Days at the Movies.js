function beautifulDays(i, j, k) {
    // O(n * d)
    // O(1)
    const inverteNumber = (num) => {
        return parseInt(num.toString().split('').reverse().join(''));
    };

    let beautifulDays = 0;

    for (i; i <= j; i++) {
        let diff = Math.abs(i - inverteNumber(i));
        if (diff % k == 0) beautifulDays++;
    }

    return beautifulDays;
}