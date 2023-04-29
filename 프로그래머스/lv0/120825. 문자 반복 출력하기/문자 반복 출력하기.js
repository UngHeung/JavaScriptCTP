function solution(my_string, n) {
    let str = ''
    for (let i = 0; i < my_string.length; i++) {
        str+=my_string[i].repeat(n)
    }
    return str
}