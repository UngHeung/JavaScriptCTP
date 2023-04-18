function solution(s){
    var answer = check(s);
    return answer;
}

const left = []
const right = []

function check(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            left.push(i)
        } else if (s.charAt(i) === ')') {
            right.push(i)
            if (right.length>left.length) {
                return false;
            } else {
                left.pop()
                right.pop()
            }
        }
    }
    
    if (left.length > 0) {
        return false;
    }
    
    return true;
}