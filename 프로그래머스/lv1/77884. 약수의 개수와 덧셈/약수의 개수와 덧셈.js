function solution(left, right) {
    let tot = 0
    for (let i = left; i <= right; i++) {
        if (div(i)) tot -= i
        else tot += i
    }
    return tot
}

function div(num) {
    cnt = 0
    for (let i = 1; i <= num/2; i++) {
        if (!(num % i)) cnt++
    }
    return check(cnt+1)
}
    
function check(cnt) {
    if (cnt%2) return true
    else return false
}
