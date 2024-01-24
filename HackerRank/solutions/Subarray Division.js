function birthday(s, d, m) {
    // Write your code here
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let segment = s.slice(i, i + m);
        let sum = segment.reduce((sum, value) => sum + value);
        
        if(sum === d){
            count++;
        }
    }
    
    return count;
}