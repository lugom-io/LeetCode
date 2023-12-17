/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let result = "";

    for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) === num.charAt(i + 1) && num.charAt(i) === num.charAt(i + 2) && num.charAt(i) > result.charAt(0)) {
            result = num.substring(i, i + 3);
        }
    }

    return result;
};