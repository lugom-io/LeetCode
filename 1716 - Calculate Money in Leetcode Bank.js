/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let result = 0;
    let j = 1;
    for(let i = 1; i <= n; i++){
        result += j;
        j++;
        if(i % 7 == 0){
            j = i / 7 + 1;
        }
    }
    return result;
};