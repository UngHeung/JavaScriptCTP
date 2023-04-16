function solution(s) {
    let answer = checkMinAndMax(s.split(" "))
    return answer;
}

function checkMinAndMax(arr) {
    let min = parseInt(arr[0]);
    let max = parseInt(arr[0]);
    
    for (i of arr) {
        let num = parseInt(i);
        if (num < min) {
            min = num
        } else if (max < num) {
            max = num
        }
    }
    
    return `${min} ${max}`
}