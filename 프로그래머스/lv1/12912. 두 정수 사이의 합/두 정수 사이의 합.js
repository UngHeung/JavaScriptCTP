// const solution=(a,b)=>Array.from({length:Math.abs(b-a)+1},x=>a<b?a++:a--).reduce((a,b)=>a+b,0)
const solution = (a, b) => {
    let tot = 0;
    let [ s, l ] = [a, b].sort((a, b) => a - b);
    for (let i = s; i <= l; i++) {
        tot += i;
    }
    return tot;
}