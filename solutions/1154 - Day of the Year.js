/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    date = date.split('-').map(Number);
    let fev = (date[0] % 4 == 0 && (date[0] % 100 != 0 || date[0] % 400 == 0)) ? 29 : 28;
    let dias = [31, fev, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dias.slice(0, date[1] - 1).reduce((a, b) => a + b, date[2]);
};