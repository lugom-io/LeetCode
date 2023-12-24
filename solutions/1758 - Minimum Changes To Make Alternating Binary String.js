/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            count += s[i] == '0' ? 0 : 1;
        }
        else {
            count += s[i] == '1' ? 0 : 1;
        }

    }

    return Math.min(count, s.length - count);
};