function solution(n) {
    let cnt = 1;
    for (let i = 1; i <= n/2; i++) {
        !(n % i) ? cnt++ : 0;
    }
    return cnt;
}