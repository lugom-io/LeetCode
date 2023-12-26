/**
 * 01 SOLUTION
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

/**
 * 02 SOLUTION (BEST)
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

/**
 * 03 SOLUTION
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        return recursao(functions, x);
    }
};

function recursao(arr, x) {
    if (arr.length === 0) {
        return x;
    } else {
        const fn = arr.shift();
        return fn(recursao(arr, x));
    }
}