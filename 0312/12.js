// 12. 문자열 뒤집기

function solution(my_string) {
    let answer = "";

    for (let i = my_string.length - 1; i >= 0; i--) {
        answer += my_string.charAt(i);
    }

    return answer;
}
