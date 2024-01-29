function formingMagicSquare(s) {
    const possibilities = [
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]]
    ];

    let cost = -1;

    for (const pos of possibilities) {
        const currentCost = getCost(s, pos);
        if (cost == -1 || currentCost < cost) cost = currentCost;
    }

    return cost;

}

function getCost(arr, pos) {
    let cost = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            cost += Math.abs(arr[i][j] - pos[i][j]);
        }
    }

    return cost;
}