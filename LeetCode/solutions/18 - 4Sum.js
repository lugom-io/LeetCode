/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const n = nums.length;
    const quadruplets = [];
    nums.sort((a, b) => a - b);

    for (let a = 0; a < n - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        for (let b = a + 1; b < n - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;
            const newTarget = target - nums[a] - nums[b];
            let c = b + 1;
            let d = n - 1;

            while (c < d) {
                const sum = nums[c] + nums[d];
                if (sum < newTarget) {
                    c++;
                } else if (sum > newTarget) {
                    d--;
                } else {
                    quadruplets.push([nums[a], nums[b], nums[c], nums[d]]);
                    while (c < d && nums[c] === nums[c + 1]) c++;
                    while (c < d && nums[d] === nums[d - 1]) d--;
                    c++;
                    d--;
                }
            }
        }
    }

    return quadruplets;
};