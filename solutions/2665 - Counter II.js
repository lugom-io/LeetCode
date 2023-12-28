/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let count = init;

    let increment = () => ++count;
    let decrement = () => --count;
    let reset = () => count = init;

    return {increment, decrement, reset};
};