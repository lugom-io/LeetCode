/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let ans = new Array(num_people).fill(0);
    let i = 0;

    while(candies > 0){
        if(i >= candies){
            ans[i % num_people] += candies;
            break;
        }
        ans[i % num_people] += i + 1;
        candies -= i + 1;
        i++;
    }

    return ans;
};