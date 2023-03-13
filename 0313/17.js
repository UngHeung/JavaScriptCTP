// 17. 외계행성의 나이

function solution(age) {
    let answer = "";

    age += "";

    for (let i = 0; i < age.length; i++) {
        answer += String.fromCharCode(97 + parseInt(age.charAt(i)));
    }

    return answer;
}

console.log(solution(23));
