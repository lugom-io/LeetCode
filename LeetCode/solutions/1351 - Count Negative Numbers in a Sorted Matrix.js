/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
 * return the number of negative numbers in grid.
 *
 * Example 1:
 * Input: grid = [
 *   [4,3,2,-1],
 *   [3,2,1,-1],
 *   [1,1,-1,-2],
 *   [-1,-1,-2,-3]
 * ]
 * Output: 8
 * Explanation: There are 8 negative numbers in the matrix.
 *
 * Example 2:
 * Input: grid = [
 *   [3,2],
 *   [1,0]
 * ]
 * Output: 0
 *
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 100
 * -100 <= grid[i][j] <= 100
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let ans = 0;

    for (let i = 0; i < grid.length; i++) {
        let min = 0;
        let max = grid[i].length - 1;

        while(min <= max){
            let mid = Math.floor((min + max)/2);
            let num = grid[i][mid];

            if(num >= 0){
                min = mid + 1;
            } else{
                max = mid - 1;
            }
        }

        ans += grid[i].length - max - 1;
    }

    return ans;

};