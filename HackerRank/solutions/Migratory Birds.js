function migratoryBirds(arr) {
    // Write your code here
    
    let ids = new Map();
    
    for(const id of arr){
        ids.set(id, ids.get(id) + 1 || 1);
    }
    
    let ans = [-1, -1];
    
    for(const [key, value] of ids){
        if(value > ans[1] || value == ans[1] && ans[0] > key){
            ans = [key, value];
        }
    }
    
    return ans[0];
}