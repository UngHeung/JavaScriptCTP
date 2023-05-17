function solution(participant, completion) {
    const map = new Map()
    for (i of participant) {
        if (map.get(i) || map.get(i) === 0) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1)
        }
    }
    
    for (i of completion) {
        map.set(i, map.get(i) - 1)
    }
    
    for (i of participant) {
        if (map.get(i)) {
            return i
        }
    }
}