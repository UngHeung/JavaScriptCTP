function solution(array, n) {
    let answer = 0;
    array.filter(el=>(el===n)?answer++:answer+=0)
    return answer;
}