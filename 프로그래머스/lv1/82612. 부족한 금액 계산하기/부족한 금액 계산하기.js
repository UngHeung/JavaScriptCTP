// const solution=(p,m,c)=>Array(c).fill(p).reduce((a,b,i)=>a+b*i,1)-m

const solution=(p,m,c)=>{let re=Array(c).fill(p).reduce((t,e,i)=>t+=e*(i+1),0)-m;return re>0?re:0}