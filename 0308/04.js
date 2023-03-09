// 04. 양꼬치

function solution(n, k) {
    let answer = n * 12000;

    if (n >= 10) {
        k -= Math.floor(n / 10);
    }

    answer += k * 2000;

    return answer;
}
