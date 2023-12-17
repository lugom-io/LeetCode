/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let result = num;
  
    for (let i = num.length - 1; i >= 0; i--) {
      if (num.charAt(i) % 2 == 1) {
        return result;
      } else {
        result = result.slice(0, -1);
      }
    }
  
    return result;
  };