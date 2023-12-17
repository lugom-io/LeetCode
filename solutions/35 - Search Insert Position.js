/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let rigth = nums.length;

    while (left < rigth) {
        let mid = Math.floor((left + rigth) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            rigth = mid;
        }
    }

    return left;
};