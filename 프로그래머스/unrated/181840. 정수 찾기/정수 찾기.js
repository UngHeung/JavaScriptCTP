function solution(num_list, n) {
    return num_list.filter(v => n===v).length?1:0
}