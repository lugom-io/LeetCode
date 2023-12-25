/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s[0] === '0') return 0;

    const sLen = s.length;
    const possibilities = new Array(sLen + 1).fill(0);
    possibilities[0] = 1;
    possibilities[1] = 1;

    for (let i = 2; i <= sLen; i++) {
        const one = parseInt(s[i - 1]);
        const two = parseInt(s.substring(i - 2, i));

        if (one !== 0) {
            possibilities[i] += possibilities[i - 1];
        }
        if (10 <= two && two <= 26) {
            possibilities[i] += possibilities[i - 2];
        }
    }

    return possibilities[sLen];
};