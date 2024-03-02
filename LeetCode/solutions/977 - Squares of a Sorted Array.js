/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const n = nums.length;
    let ans = new Array(n);

    let left = 0, right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            ans[i] = nums[right] ** 2;
            right--;
        } else {
            ans[i] = nums[left] ** 2;
            left++;
        }
    }

    return ans;
};