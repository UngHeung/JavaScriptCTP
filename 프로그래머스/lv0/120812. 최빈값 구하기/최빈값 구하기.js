function solution(array) {
    const set = new Set(array);
    
    let res = -1;
    let max = 0;
     
    for (num of set) {
        let len = array.filter(e => e === num).length;
        
        if (len > max) {
            max = len;
            res = num;
        } else if (len === max) {
            res = -1;
        }
    }
    
    return res;
}