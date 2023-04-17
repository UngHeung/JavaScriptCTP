function solution(my_string, letter) {
    var answer = my_string.split(letter).join("");
    
    // for (let i = 0; i < my_string.length; i++) {
    //     if (my_string.charAt(i) !== letter) {
    //         answer += my_string.charAt(i);
    //     }
    // }

    return answer;
}