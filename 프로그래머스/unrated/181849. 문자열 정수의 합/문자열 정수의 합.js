const solution=(num_str)=>{return [...num_str].reduce((a,b)=>a+parseInt(b),0)}
// Array.from(num_str).reduce((a,b)=>a+parseInt(b),0)