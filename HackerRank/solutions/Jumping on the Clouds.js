function jumpingOnClouds(c, k) {
    const n = c.length;
    let e = 100;

    let i = 0;
    do {
        e -= (c[i] == 0) ? 1 : 3;
        i = (i + k) % n;
    } while (i != 0)

    return e;
}