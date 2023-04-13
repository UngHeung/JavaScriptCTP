function solution(order) {
    let answer = 0;
    
    order+='';
    for (let i = 0; i < order.length; i++) {
        if (order.charAt(i) === '3' || order.charAt(i) === '6' || order.charAt(i) === '9') {
            answer++;
        }
    }
    
    return answer;
}