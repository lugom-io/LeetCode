function hourglassSum(arr) {
    const n = arr.length / 2;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            let hourglassSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            max = Math.max(hourglassSum, max);
        }
    }
    
    return max;
}