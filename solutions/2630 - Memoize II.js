const r = Symbol("result");

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let cache = new Map();

    return function (...args){

        let currentCache = cache;

        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has(r)) return currentCache.get(r);

        const result = fn(...args);

        currentCache.set(r, result);
        return result;
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