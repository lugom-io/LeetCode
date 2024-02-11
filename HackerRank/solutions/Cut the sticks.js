// RECURSION
function cutTheSticks(arr) {
    arr.sort((a, b) => b - a);

    const recur = (arr, ans) => {
        const size = arr.length;
        if (size <= 1) {
            if (size == 1) ans.push(1);
            return;
        } else {
            ans.push(size);
            arr.splice(arr.indexOf(arr[size - 1]), Infinity);
            recur(arr, ans);
        }
        return ans;
    }

    return recur(arr, []);
}

// LOOP
function cutTheSticks(arr) {
    const ans = [];

    while (arr.length > 0) {
        ans.push(arr.length);
        const min = Math.min(...arr);
        arr = arr.map(num => num - min).filter(num => num > 0);
    }

    return ans;
}
