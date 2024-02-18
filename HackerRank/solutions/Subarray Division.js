function birthday(s, d, m) {
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

// SOLUTION 2
function birthday(s, d, m) {
    let segments = 0;
    
    for(let i = 0; i <= s.length - m; i++){
        let currentSegment = 0;
        for(let j = i; j <= i + m - 1; j++){
            currentSegment += s[j];
        }
        if(currentSegment == d) segments++;
    }
    
    return segments;
}