function getMoneySpent(keyboards, drives, b) {
    let ans = -1;
    
    for(const keyboard of keyboards){
        for(const drive of drives){
            let budget = keyboard + drive;
            if(budget > ans && budget <= b) ans = budget;
        }
    }
    
    return ans;
}