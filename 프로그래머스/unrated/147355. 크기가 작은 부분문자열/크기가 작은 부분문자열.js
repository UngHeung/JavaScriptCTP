function solution(t, p) {
    const len = p.length;
    let count = 0;
    
    for (let i = 0; i <= t.length - len; i++) {
        const num = [t.substr(i, len)].join('') * 1;
        
        if (num <= p * 1) {
            count++
        }
    }
    
    return count
}