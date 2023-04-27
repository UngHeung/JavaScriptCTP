function solution(n) {
    var answer = count1(n);
    while (true) {
        if (count1(++n) === answer) {
            answer = n;
            break;
        }
    }
    return answer;
}

function count1(number) {
    const bin = number.toString(2);
    return bin.length - bin.replaceAll("1", "").length;
}