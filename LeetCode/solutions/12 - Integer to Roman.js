/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * Symbol       Value
 * I            1
 * V            5
 * X            10
 * L            50
 * C            100
 * D            500
 * M            1000
 * 
 * For example, 2 is written as II in Roman numeral, just two one's added together.
 * 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
 * Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * Given an integer, convert it to a roman numeral.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let cont = new Array(13).fill(0);
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < cont.length; i++) {
        if (num / values[i] >= 1) {
            cont[i] = Math.floor(num / values[i]);
            num %= values[i];
        }
    }

    return "M".repeat(cont[0]) + "CM".repeat(cont[1]) + "D".repeat(cont[2]) + "CD".repeat(cont[3]) + "C".repeat(cont[4]) + "XC".repeat(cont[5]) + "L".repeat(cont[6]) + "XL".repeat(cont[7]) + "X".repeat(cont[8]) + "IX".repeat(cont[9]) + "V".repeat(cont[10]) + "IV".repeat(cont[11]) + "I".repeat(cont[12]);
};