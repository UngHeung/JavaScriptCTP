// 09. 피자 나눠 먹기

function solution(n) {
    let answer = Math.floor(n / 7);

    if (n % 7 > 0) {
        answer++;
    }

    return answer;
}
