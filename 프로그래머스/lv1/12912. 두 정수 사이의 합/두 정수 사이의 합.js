const solution=(a,b)=>Array.from({length:Math.abs(b-a)+1},x=>a<b?a++:a--).reduce((a,b)=>a+b,0)