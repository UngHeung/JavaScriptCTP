function solution(d, budget) {
    let answer = 0
    return d.sort((a, b) => a - b).reduce((a, b, i = 1) => {
        if (a <= budget) {
            answer = i
        }
        return a + b
    })>budget ? answer : answer + 1
}