// S1
function equalizeArray(arr) {
    let numsCount = new Map();
    
    for(const num of arr){
        numsCount.set(num, (numsCount.get(num) || 0) + 1);
    }
    
    return arr.length - Math.max(...numsCount.values());
}

// S2
function equalizeArray(arr) {
    let numsCount = new Map();
    let maxCount = 0;
    
    for(const num of arr){
        numsCount[num] = (!numsCount[num]) ? 1 : numsCount[num] + 1;
        if(numsCount[num] > maxCount) maxCount = numsCount[num];
    }
    
    return arr.length - maxCount;
}