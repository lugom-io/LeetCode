function maxSubarray(arr) {
    let maxSubArraySum = arr[0];
    let currentSubArraySum = arr[0];
    let maxSubSequence = (arr[0] > 0) ? arr[0] : 0;
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSubArraySum = Math.max(arr[i], arr[i] + currentSubArraySum);
        maxSubArraySum = Math.max(maxSubArraySum, currentSubArraySum);
        if (arr[i] > 0) maxSubSequence += arr[i];
        maxElement = Math.max(maxElement, arr[i]);
    }

    return [maxSubArraySum, maxSubSequence || maxElement];
}