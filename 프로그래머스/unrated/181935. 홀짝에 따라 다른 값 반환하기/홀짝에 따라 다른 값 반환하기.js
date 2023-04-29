function solution(n){
    let tot = 0;
    for (let i = 1; i <= n; i++) {
        if (n % 2) {
            if (i % 2) {
                tot += i
            }
        } else {
            if (!(i % 2)) {
                tot += i**2
            }
        }
    }
    return tot
}