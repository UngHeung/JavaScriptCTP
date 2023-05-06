// /^(aya|ye|woo|ma)+$/

const solution=(b)=>{
    const r = /^(aya|ye|woo|ma)+$/
    let cnt = 0
    b.forEach(w=>r.test(w)?cnt++:0)
    return cnt
}