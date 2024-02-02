function utopianTree(n) {
    if (n === 0) return 1;
    return (n % 2 === 0) ? Math.pow(2, n / 2 + 1) - 1 : Math.pow(2, (n + 1) / 2 + 1) - 2;
}