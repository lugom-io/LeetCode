/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let ans = -1;

    let min = 0;
    let max = nums.length - 1;

    while(min <= max){
        let mid = Math.floor((min + max)/2);
        let num = nums[mid];

        if(num == target){
            ans = mid;
            break;
        } else if(num > target){
            max = mid - 1;
        } else{
            min = mid + 1;
        }
    }

    return ans;
};