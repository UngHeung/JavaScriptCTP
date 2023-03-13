// 16. 배열 회전시키기

function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop());
    } else if (direction === "left") {
        numbers.push(numbers.shift());
    }

    let answer = numbers;

    return answer;
}
