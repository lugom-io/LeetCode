/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((arr, i) => {
        const chave = fn(i);
        if (!arr[chave]) {
            arr[chave] = [];
        }

        arr[chave].push(i);
        return arr;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */