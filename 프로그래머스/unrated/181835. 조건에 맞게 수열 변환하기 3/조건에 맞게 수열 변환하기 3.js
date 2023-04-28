function solution(arr, k) {
    const answer = []
    for (i of arr) { answer.push(k % 2 === 0 ? i + k : i * k) }
    return answer
}