/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    const obj = new Object();

    return function (...args) {
        let chave = args.toString();

        if (obj[chave] != undefined) {
            return obj[chave];
        } else {
            obj[chave] = fn(...args);
            return obj[chave];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */