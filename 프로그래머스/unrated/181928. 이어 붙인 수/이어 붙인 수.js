function solution(num_list) {
    let odd = ''
    let even = ''
    num_list.forEach(e => {
        e % 2 ? odd += e : even += e
    })
    return Number(odd) + Number(even)
}