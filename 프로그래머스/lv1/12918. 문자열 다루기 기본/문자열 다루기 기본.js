const solution = (s) => {
    if (s.match(/[a-zA-Z]/g)) return false
    else return s.length===4||s.length===6?true:false
}