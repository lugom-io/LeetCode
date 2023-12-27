/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let ans;
    let count = 0;

    for(const num of nums){
        if(count === 0) ans = num;
        (num === ans) ? count++ : count--;
    }

    return ans;
};