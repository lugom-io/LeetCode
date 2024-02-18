function organizingContainers(container) {
    const n = container.length;
    let containerCapacity = new Array(n).fill(0);
    let countPerType = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            countPerType[j] += container[i][j];
            containerCapacity[i] += container[i][j];
        }
    }
    
    containerCapacity.sort((a, b) => b - a);
    countPerType.sort((a, b) => b - a);
    
    for(let i = 0; i < n; i++){
        if(containerCapacity[i] < countPerType[i]) return "Impossible";
    }
    
    return "Possible";
}