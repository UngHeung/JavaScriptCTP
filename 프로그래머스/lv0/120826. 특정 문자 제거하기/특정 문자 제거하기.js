function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g')
    let answer = my_string.replace(reg, "");
    return answer;
}