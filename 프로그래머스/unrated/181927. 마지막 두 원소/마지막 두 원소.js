function solution(num_list) {
    const len = num_list.length
    const lNum = num_list[len-1]
    const pNum = num_list[len-2]
    
    if (lNum > pNum) {
        num_list.push(lNum - pNum)
    } else { 
        num_list.push(lNum * 2)
    }
    
    return num_list
}