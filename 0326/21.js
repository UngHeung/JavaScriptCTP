// 21. 팩토리

function solution(n) {
    let answer = 1;
    let total = answer;

    while (true) {
        total *= answer;
        if (total > n) {
            return answer - 1;
        } else if (total == n) {
            return answer;
        }
        answer += 1;
    }
}
