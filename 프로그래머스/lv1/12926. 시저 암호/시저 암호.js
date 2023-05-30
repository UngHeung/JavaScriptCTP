function solution(s, n) {
    return [...s].map(e => {
        let code = e.charCodeAt()
          
        if (64 < code && code < 91) {
            code += n
            if (90 < code) {
                code = code - 90 + 64
            }
        } else if (96 < code && code < 123) {
            code += n
            if (122 < code) {
                code = code - 122 + 96
            }
        }
        
        return String.fromCharCode(code)
    }).join('')
}