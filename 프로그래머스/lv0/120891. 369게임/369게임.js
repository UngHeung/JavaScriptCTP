function solution(order) {
    let answer = String(order).split(/[369]/g).length-1;
    return answer;
}