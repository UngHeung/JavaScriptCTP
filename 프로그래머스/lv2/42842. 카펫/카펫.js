function solution(brown, yellow) {
    let size = brown + yellow
    let yHeight = 1;
    let yWidth = yellow;
    let result = [];
    
    while (yHeight <= yWidth) {
        yWidth = yellow / yHeight;
        
        if ((yWidth + 2) * (yHeight + 2) === size) {
            result = [yWidth + 2, yHeight+ 2]
            break;
        }
        
        yHeight++;
    }
    
    return result;
}



// 가로 >= 세로
// brown의 가로, 세로 길이가 yellow보다 2씩 큰 경우를 구한다.

/*
    가로 = yellow / 2 부터 ++
    세로 = yellow / 가로
    yellow 가로 + 2 === brown 가로 + 2 && yellow 세로 + 2 === brown 세로
    return brown [가로, 세로]
*/