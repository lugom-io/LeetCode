/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    const sLen = s.length;
    
    let tmp = s[0] === '1' ? 0 : 1;
    let score = tmp;
    let ones = s[sLen - 1] === '0' ? 0 : 1;

    for (let i = 1; i < sLen - 1; i++) {
        if (s[i] === '0') {
            tmp++;
        } else {
            ones++;
            tmp--;
        }

        if (tmp > score) {
            score = tmp;
        }
    }

    return ones + score;
};