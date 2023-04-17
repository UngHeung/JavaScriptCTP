function solution(my_str, n) {
    // return my_str.match(new RegExp(`.{1,${n}}`, 'g'))
    return my_str.match(new RegExp(`\\w{1,${n}}`, 'g'))
}