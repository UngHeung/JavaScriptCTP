// 13. 특정 문자 제거하기

function solution(my_string, letter) {
    let answer = "";

    for (let i = 0; i < my_string.length; i++) {
        if (my_string.charAt(i) !== letter) {
            answer += my_string.charAt(i);
        }
    }

    return answer;
}
