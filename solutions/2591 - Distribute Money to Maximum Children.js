/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if(money < children){
        return -1;
    } else if(money == 8 * children - 4){
        return children - 2;
    } else if(money > 8 * children){
        return children - 1;
    } else{
        return Math.floor((money - children)/7)
    }
};