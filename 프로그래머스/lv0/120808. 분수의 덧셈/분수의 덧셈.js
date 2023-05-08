function solution(numer1, denom1, numer2, denom2) {
    let num = numer1 * denom2 + numer2 * denom1
    let den = denom1 * denom2
    
    let a = Math.min(den, num);
    while(a>0) {
        if (num%a===0 && den%a===0) {
            return [num/a, den/a]
        }
        a--
    }
    
    return [num, den]
}