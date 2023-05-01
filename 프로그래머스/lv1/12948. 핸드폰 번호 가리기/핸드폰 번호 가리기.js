// const solution=(pn)=>[...Array(pn.length-4).fill('*'),pn.slice(-4)].join('')
const solution=(p)=>[...p].fill('*',0,p.length-4).join('')