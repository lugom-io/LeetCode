/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let arrF = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            arrF.push(arr[i]);
        }
    }

    return arrF;
};