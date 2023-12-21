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