function solution(my_string) {
    let answer = 0;
    my_string.match(/\d/g).forEach(e => answer+=parseInt(e))
    return answer;
}