function viralAdvertising(n) {
    let shared = 5;
    let cumulative = 0;

    for (let day = 1; day <= n; day++) {
        let liked = Math.floor(shared / 2);
        cumulative += liked;
        shared = liked * 3;
    }

    return cumulative;
}