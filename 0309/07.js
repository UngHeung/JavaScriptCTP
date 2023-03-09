// 7. 머쓱이보다 키 큰 사람

function solution(array, height) {
    let answer = 0;

    for (let i = 0; i < array.length; i++) {
        if (height < array[i]) {
            answer++;
        }
    }

    return answer;
}
