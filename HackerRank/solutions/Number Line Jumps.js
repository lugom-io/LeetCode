function kangaroo(x1, v1, x2, v2) {
    // x1 > x2 && v1 > v2 = NO
    // x2 > x1 && v2 > v1 = NO
    // x1 > x2 && v1 < v2 = YES
    // x2 > x1 && v2 < v1 = YES

    return (v1 > v2 && ((x2 - x1) % (v1 - v2) == 0)) ? "YES" : "NO";

}