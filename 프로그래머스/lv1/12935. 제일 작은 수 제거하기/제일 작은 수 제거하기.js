// const solution=(arr)=>(arr=arr.filter(e=>e!==Math.min(...arr))).length?arr:[-1]

const solution = (arr) => {
    arr = arr.filter(e => e !== Math.min(...arr))
    if (arr.length) {
        return arr
    } else {
        return [-1]
    }
}