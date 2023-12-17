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