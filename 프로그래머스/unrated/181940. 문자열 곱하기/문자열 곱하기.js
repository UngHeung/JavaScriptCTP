function solution(my_string, k) {
    const answer = []
    for(let i = 0; i < k; i++) {
        answer.push(my_string)
    }
    return answer.join('')
}