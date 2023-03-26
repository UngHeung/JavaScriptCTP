// 22. 한 번만 등장한 문자

function solution(s) {
    let answer = "";

    let bef = 0;
    let aft = 0;
    let count = s.length;

    let arr = [];

    for (let i = 0; i < count; i++) {
        tempChar = s.charAt(0);

        bef = s.length;
        s = s.replaceAll(tempChar, "");
        aft = s.length;

        if (bef - aft === 1) {
            arr.push(tempChar);
        }
    }

    arr = arr.sort();

    arr.forEach((e) => {
        answer += e;
    });

    return answer;
}
