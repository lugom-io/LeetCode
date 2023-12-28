/**
 * FIRST SOLUTION
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    return arr.map((n, i) => fn(n, i));
};

/**
 * SECOUND SOLUTION
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let transfArr = [];
    for (let i = 0; i < arr.length; i++) {
        transfArr[i] = fn(arr[i], i);
    }
    return transfArr;
};