// 24. 가까운 수

function solution(array, n) {
    let answer = array[0];

    let gap = Math.abs(array[0] - n);

    for (let i = 1; i < array.length; i++) {
        let temp = Math.abs(array[i] - n);
        if (temp < gap) {
            gap = temp;
            answer = array[i];
        } else if (temp === gap) {
            answer = Math.min(answer, array[i]);
        }
    }

    return answer;
}
