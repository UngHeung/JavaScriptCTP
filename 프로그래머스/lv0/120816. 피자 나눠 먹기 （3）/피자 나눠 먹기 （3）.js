function solution(slice, n) {
    return n % slice ? Math.floor(n / slice) + 1 : Math.floor(n /slice)
}