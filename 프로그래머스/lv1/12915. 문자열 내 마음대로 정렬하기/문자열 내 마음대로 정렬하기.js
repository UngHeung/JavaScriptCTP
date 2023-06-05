function solution (strings, n) {
    let count = 0
    
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings.length - 1 - i; j++) {
            [strings[j], strings[j + 1]] = isSort(strings[j], strings[j + 1], n)
            count++
        }
    }
    
    return strings
}

function isSort(str1, str2, n) {
    if (str1.charAt(n) === str2.charAt(n)) {
        return [str1, str2].sort()
    }
    
    let ln = str1.charAt(n).charCodeAt()
    let rn = str2.charAt(n).charCodeAt()
    
    if (ln > rn) {
        return [str2, str1]
    }
    
    return [str1, str2] 
}