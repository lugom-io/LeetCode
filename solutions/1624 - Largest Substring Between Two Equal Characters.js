/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {

    let ans = -1;

    for (let firstIndex = 0; firstIndex < s.length; firstIndex++) {
        const lastIndex = s.lastIndexOf(s[firstIndex]);
        ans = Math.max(ans, lastIndex - (firstIndex + 1));
    }

    return ans;
};