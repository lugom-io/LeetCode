/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let indices = [-1, -1];
    nums.sort((a, b) => a-b);

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            if(indices[0] == -1){
                indices[0] = i;
                indices[1] = i;
            } else{
                indices[1] = i;
            }
        }
    }

    return indices;
};