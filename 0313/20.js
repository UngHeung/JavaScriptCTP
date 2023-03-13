// 20. A로 B 만들기

function solution(before, after) {
    let answer = 0;

    let beforeArr = before.split("").sort();
    let afterArr = after.split("").sort();

    for (let i = 0; i < beforeArr.length; i++) {
        if (beforeArr[i] !== afterArr[i]) {
            return answer;
        }
    }

    return 1;
}

console.log(solution("olleh", "hello"));
console.log(solution("allpe", "apple"));
