function climbingLeaderboard(ranked, player) {
    // Write your code here
    // 60 75 80 90 100 rank
    // 50 65 77 90 102 player

    let uniqueRanks = [...new Set(ranked)];
    let ans = [];

    let i = 0;
    let j = uniqueRanks.length - 1;
    while (i < player.length) {
        if (j >= 0 && player[i] < uniqueRanks[j]) {
            ans.push(j + 2);
            i++;
        } else if (j < 0) {
            ans.push(1);
            i++;
        } else {
            j--;
        }
    }

    return ans;
}