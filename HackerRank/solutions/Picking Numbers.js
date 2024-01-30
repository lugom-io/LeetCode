function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let currentNumber = a[0];
    let countSubarrays = [1];

    for (let i = 1; i < a.length; i++) {
        if (Math.abs(a[i] - currentNumber) <= 1) {
            countSubarrays[countSubarrays.length - 1]++;
        } else {
            currentNumber = a[i];
            countSubarrays.push(1);
        }
    }

    return Math.max(...countSubarrays);
}

// SOLUÇÃO 2

function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let first = a[0];
    let subArrays = a.reduce((subArr, value, index) => {
        if (index == 0) {
            subArr.push(1);
        } else if (Math.abs(value - first) <= 1) {
            subArr[subArr.length - 1]++;
        } else {
            first = value;
            subArr.push(1);
        }

        return subArr;
    }, []);

    return Math.max(...subArrays);
}