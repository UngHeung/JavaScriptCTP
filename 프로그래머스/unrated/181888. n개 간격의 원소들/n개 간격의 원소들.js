function solution(num_list, n) {
    const res = []
    for (let i = 0; i < num_list.length; i+=n) {
        res.push(num_list[i])
    }
    return res
}