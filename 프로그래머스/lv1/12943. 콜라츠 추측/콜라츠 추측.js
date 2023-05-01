const solution = (num) => {
    let cnt = 0;
    while (num!==1) {
        if (!(num % 2)) {
            num = even(num)
        } else {
            num = odd(num)
        }
        
        if (check(cnt++)) {
            return -1
        }
    }
    return cnt
}

const even = (num) => {
    return num / 2
}

const odd = (num) => {
    return num * 3 + 1
}

const check = (cnt) => {
    if (cnt === 500) return true
    return false
}