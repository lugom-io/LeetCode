function queensAttack(n, k, r_q, c_q, obstacles) {
    const bloq = new Set(obstacles.map(([r, c]) => `${r},${c}`));
    const moves = [
        [0, -1], [0, 1], [-1, 0], [1, 0],
        [-1, -1], [1, 1], [1, -1], [-1, 1]
    ];

    let ans = 0;

    for (const [row, col] of moves) {
        let i = r_q + row;
        let j = c_q + col;
        while (i >= 1 && i <= n && j >= 1 && j <= n) {
            if (bloq.has(`${i},${j}`)) break;
            ans++;
            i += row;
            j += col;
        }
    }
    
    return ans;
}