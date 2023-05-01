// const solution=(a,b)=>Array.from({length:Math.abs(b-a)+1},x=>a<b?a++:a--).reduce((a,b)=>a+b,0)
const solution=(a,b)=>(a+b)/2*((a>b?a-b:b-a)+1)


