// const solution=(n,i=1)=>Array.from({length:n},x=>i++).filter(e=>n%e===1)[0]
function solution(n) {
    let i = 0;
    while(i++ !== n) {
        if(n%i===1) return i
    }
}