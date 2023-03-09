// 06. 배열의 평균값

function solution(numbers) {
    let count = numbers.length;
    let total = 0;

    for (let i = 0; i < count; i++) {
        total += numbers[i];
    }

    let answer = total / count;

    return answer;
}
