function solution(sizes) {
    let width = 0
    let height = 0
    
    for (const size of sizes) {
        const max = Math.max(...size)
        const min = Math.min(...size)
        
        if (width < max) {
            width = max
        }
        
        if (height < min) {
            height = min
        }
    }
    
    return width * height
}