// 1 SOLUTION
function extraLongFactorials(n) {
    const calcFactorial = (fat) => {
        return (fat === 1n) ? fat : fat * calcFactorial(fat - 1n);
    }
    
    console.log(calcFactorial(BigInt(n)).toString());
}

// 2 SOLUTION
function extraLongFactorials(n) {
    let ans = BigInt(n);

    while (n > 1) {
        ans *= BigInt(n - 1);
        n--;
    }

    console.log(ans.toString());
}