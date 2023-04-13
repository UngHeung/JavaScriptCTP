function solution(s1, s2) {
    var answer = 0;
    
    // for (let i = 0; i < s1.length; i++) {
    //     if (s2.includes(s1[i])) {
    //         answer++;
    //     }
    // }
    s2 = new Set(s2)
    
    answer = [...s1].filter((e) => s2.has(e)).length
    
    return answer;
}