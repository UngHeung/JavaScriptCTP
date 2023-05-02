// const solution=(a,b,i=0)=>a.map(e=>e*b[i++]).reduce((a,b)=>a+b)
const solution=(a,b)=>a.reduce((t,_,i)=>t+a[i]*b[i],0)