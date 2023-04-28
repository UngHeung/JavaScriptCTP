function solution(n, control) {
    let answer = n;
    let len = control.length;
    answer += len - control.replaceAll('w', '').length;
    answer -= len - control.replaceAll('s', '').length;
    answer += (len - control.replaceAll('d', '').length) * 10
    answer -= (len - control.replaceAll('a', '').length) * 10
    return answer;
}