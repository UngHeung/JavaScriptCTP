function solution(s) {
    const stack = [];
    for (v of s) {
        stack.length===0?stack.push(v)
        :stack[stack.length-1]===v?stack.pop()
        :stack.push(v);
    }
    return stack.length===0?1:0;
}