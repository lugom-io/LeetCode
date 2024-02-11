//WHILE
function jumpingOnClouds(c) {
    let ans = 0;
    let i = 0;

    while (i < c.length - 1) {
        ans++;
        i += (c[i + 2] === 1) ? 1 : 2;
    }

    return ans;
}


//FOR
function jumpingOnClouds(c) {
    let ans = 0;

    for (let i = 0; i < c.length - 1; i++) {
        if (c[i + 2] != 1) {
            i++;
        }
        ans++;
    }

    return ans;
}