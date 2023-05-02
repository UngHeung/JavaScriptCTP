// const solution=(arr)=>(arr=arr.filter(e=>e!==Math.min(...arr))).length?arr:[-1]

const solution = (arr) => {
    if (arr.length===1) return [-1] 
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr
}