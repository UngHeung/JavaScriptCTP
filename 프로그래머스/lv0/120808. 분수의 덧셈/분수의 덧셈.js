function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1*denom2;
    let num = 0;

    let max = Math.max(numer, denom)
    let min = Math.min(numer, denom)
    let n = 0
    let temp = 0
    
    while (true) {
        if (max % min === 0) {
            n = min
            return [numer / n, denom / n]
        }
        
        
        [max, min] = [min, max % min]
    }
    
    return [numer, denom]
}