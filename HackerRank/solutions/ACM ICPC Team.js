function acmTeam(topic) {
    //O(n*n * m)
    //O(1)
    let ans = [0, 0];
    
    const knowTopics = (ti, tj) =>{
        let count = 0;
        
        for(let i = 0; i < tj.length; i++){
            if(ti[i] == '1' || tj[i] == '1') count++;
        }
        
        return count;
    };

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let count = knowTopics(topic[i], topic[j]);
            
            if(count > ans[0]){
                ans = [count, 1];
            }else if(count == ans[0]){
                ans[1]++;
            }
        }
    }
    
    return ans;
}