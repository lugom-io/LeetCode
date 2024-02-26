/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    const n = intervals.length;

    let mapIntervals = intervals.map((interval, index) => [interval[0], interval[1], index]);
    mapIntervals.sort((a, b) => a[0] - b[0]);

    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        let index = -1;
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (mapIntervals[mid][0] < mapIntervals[i][1]) {
                left = mid + 1;
            } else {
                index = mapIntervals[mid][2];
                right = mid - 1;
            }
        }

        ans[mapIntervals[i][2]] = index;
    }

    return ans;
};