function sockMerchant(n, ar) {
    let colors = new Map();
    let pairs = 0;

    for (const sock of ar) {
        colors.set(sock, colors.get(sock) + 1 || 1);

        if (colors.get(sock) % 2 == 0) {
            pairs++;
        }
    }

    return pairs;
}