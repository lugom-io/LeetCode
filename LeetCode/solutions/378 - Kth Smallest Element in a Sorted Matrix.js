/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const n = matrix.length;
    const getCount = (mid) => {
        let count = 0;
        let row = 0;
        let col = n - 1;

        while (row < n && col >= 0) {
            if (matrix[row][col] < mid) {
                count += col + 1;
                row++;
            } else {
                col--;
            }
        }

        return count;
    };

    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let count = getCount(mid);

        if (count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};