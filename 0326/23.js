// 23. K의 개수

function solution(i, j, k) {
    let answer = 0;
    let nums = "";
    let before = 0;
    let after = 0;

    for (let n = i; n <= j; n++) {
        nums += n;
    }

    before = nums.length;
    nums = nums.replaceAll(k + "", "");
    after = nums.length;

    answer = before - after;

    return answer;
}
