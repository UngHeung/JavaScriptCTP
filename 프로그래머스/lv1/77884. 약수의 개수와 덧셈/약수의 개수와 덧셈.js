const solution=(l,r)=>Array.from({length:r-l+1},x=>l++).map(e=>Number.isInteger(Math.sqrt(e))?e*-1:e).reduce((a,b)=>a+b)