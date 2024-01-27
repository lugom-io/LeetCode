function pageCount(n, p) {
    let pages = 0;
    
    let i = 1;
    let j = (n % 2 == 1) ? n - 1 : n;
    while(i < p && j > p){
        pages++;
        i+=2;
        j-=2;
    }
    
    return pages;
}