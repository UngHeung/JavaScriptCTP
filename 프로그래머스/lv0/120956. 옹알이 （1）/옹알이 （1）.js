function solution(babbling) {
    let count = 0;
    for (const value of babbling) {
        if (isPossible(value)) {
            count++
        }
    }
    return count
}

function isPossible(value) {
    const words = ['aya', 'ye', 'woo', 'ma']
    let len = value.length
    
    for (const word of words) {
        if (value.match(word)) {
            len -= word.length
        }
        
        if (!(len)) {
            return true
        }
    }
    
    return false
}