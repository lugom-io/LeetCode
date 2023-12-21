/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    if (bloomDay.length < m * k) return -1;

    let min = Math.min(...bloomDay);
    let max = Math.max(...bloomDay);
    let ans = 0;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let countBuq = countB(mid, bloomDay, k);

        if (countBuq < m) {
            min = mid + 1;
        } else {
            ans = mid;
            max = mid - 1;
        }
    }

    return ans;
};

function countB(mid, bloomDay, k) {
    let count = 0;
    let countB = 0;

    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= mid) {
            count++;
        } else {
            countB += Math.floor(count / k);
            count = 0;
        }
    }
    countB += Math.floor(count / k);
    return countB;
}