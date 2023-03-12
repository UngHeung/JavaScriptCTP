// 11. 배열 두배 만들기

function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        answer[i] = numbers[i] * 2;
    }

    return answer;
}
