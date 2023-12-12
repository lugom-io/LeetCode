/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let c5 = 0;
    let c10 = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            c5++;
        } else if (bills[i] == 10) {
            c10++;
            c5--;
        } else {
            if (c10 == 0) {
                c5 -= 3;
            } else {
                c10--;
                c5--;
            }
        }
        if (c5 < 0) {
            return false;
        }
    }

    return true;
};