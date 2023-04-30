function solution(start, end) {
    let v=0;
    return Array((end+1)-start).fill(start--).map((el)=>el+=v++)
}