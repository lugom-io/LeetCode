function findDigits(n) {
    let divisorCount = 0;
    let nums = "" + n;
    
    for(let i = 0; i < nums.length; i++){
        if(n % nums[i] == 0) divisorCount++;
    }
    
    return divisorCount;
}