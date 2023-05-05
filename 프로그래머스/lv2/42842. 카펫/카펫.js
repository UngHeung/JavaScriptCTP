function solution(brown, yellow) {
    let size = brown + yellow
    let yWidth = yellow;
    
    return lenCheck(size, yWidth, yHeight = 1);
}

function lenCheck(size, yWidth, yHeight) {
    let yellow = yWidth;
    while (yHeight <= yWidth) {
        yWidth = yellow / yHeight;
        const bWidth = yWidth + 2;
        const bHeight = yHeight + 2;
        
        if (bWidth * bHeight === size) {
            return [bWidth, bHeight];
        }
        
        yHeight++;
    }
}