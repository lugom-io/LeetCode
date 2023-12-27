/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const sLen = score.length;
    let ans = new Array(sLen).fill(0);
    const scoreSorted = score.map((x) => x);
    scoreSorted.sort((a, b) => b - a);

    for (let i = 0; i < sLen; i++) {
        ans[i] = getPlace(scoreSorted, score[i]);
    }

    return ans;
};

function getPlace(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let cScore = arr[mid];

        if (cScore === value) {
            switch (mid) {
                case 0:
                    return "Gold Medal";
                case 1:
                    return "Silver Medal";
                case 2:
                    return "Bronze Medal";
                default:
                    return (mid + 1).toString();
            }
        } else if (cScore < value) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return undefined;
}