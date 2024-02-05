function circularArrayRotation(a, k, queries) {
    while (k > 0) {
        a.unshift(a.pop());
        k--;
    }

    return queries.map((index) => a[index]);
}