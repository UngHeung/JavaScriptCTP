function solution(str_list, ex) {
    return str_list = str_list.filter(e => !e.includes(ex)).join('')
}