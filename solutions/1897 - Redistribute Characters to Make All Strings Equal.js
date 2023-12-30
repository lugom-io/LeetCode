/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const positions = words.length;
    if (positions === 1) return true;

    let chars = new Map();

    for (const word of words) {
        for (const char of word) {
            chars.set(char, (chars.get(char) || 0) + 1);
        }
    }

    for (const [key, value] of chars.entries()) {
        if (value % positions !== 0) return false;
    }

    return true;
};