function breakingRecords(scores) {
    // Write your code here
    let countBreaking = [0, 0];
    let recordMin = scores[0];
    let recordMax = scores[0];
    
    for(const score of scores){
        if(score > recordMax){
            recordMax = score;
            countBreaking[0]++;
        } else if(score < recordMin){
            recordMin = score;
            countBreaking[1]++;
        }
    }
    
    return countBreaking;
}