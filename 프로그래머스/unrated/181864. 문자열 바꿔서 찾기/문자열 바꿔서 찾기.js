const solution=(s,p)=>s.includes([...p].map(e=>e==='A'?e='B':e='A').join(''))?1:0