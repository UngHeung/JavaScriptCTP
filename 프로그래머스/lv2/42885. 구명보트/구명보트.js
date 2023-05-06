function solution(people, limit) {
    let count = 0;
    let p1 = 0
    let p2 = people.length - 1
    
    people.sort((a, b) => b - a)
    
    while(p1<=p2) {
        if (people[p1] + people[p2] <= limit) {
            p1++
            p2--
        } else {
            p1++
        }
        count++
    }
    
    return count
}