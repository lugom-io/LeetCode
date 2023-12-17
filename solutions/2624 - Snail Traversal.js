/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];

    let row = [];

    let ans = this.reduce((acc, value) => {
        row.push(value);
        if (row.length === rowsCount) {
            (acc.length % 2 == 1) ? acc.push(row.slice().reverse()) : acc.push(row.slice());
            row = [];
        }
        return acc;
    }, []);

    return ans[0].map((_, c) => ans.map(r => r[c]));
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */