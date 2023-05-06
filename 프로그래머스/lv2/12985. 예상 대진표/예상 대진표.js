function solution(n, a, b) {
    let count = 0
    while(a!==b) {
        n/=2
        a = getNextNum(a)
        b = getNextNum(b)
        count++
    }
    return count
}

function getNextNum(num) {
    if (!(num % 2)) {
        return ~~(num / 2)
    } else {
        return ~~(num / 2) + 1
    }
}