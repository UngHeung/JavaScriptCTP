// 사진(photo) 속 이름(name) : ["kali", "mari", "don", "tony"]
// 그리움(yearning) 점수 : [11, 1, 55, 0]
// 추억(result) 점수 : 65 = (11 + 1 + 55)

/* 
    이름과 사진속 인물 이름의 교집합
    name과 photo를 비교 -> filter
    같은 이름이 있는 경우 추억점수 합산 -> reduce
    return 추억점수
*/


const solution = (name, yearning, photo) => {
    const result = []
    for (people of photo) {
        const index = getIntersectionIndex(name, people)
        let memoryPoint = 0;
        memoryPoint = yearning.reduce((sum, currValue, idx) => {
            if (index.includes(idx)) {
                return sum + currValue;
            }
            
            return sum;
        }, 0)
        
        result.push(memoryPoint)
    }
    
    return result
}

const getIntersectionIndex = (name, people) => {
    const result = []
    name.filter((item, idx) => {
        if (people.includes(item)) {
            result.push(idx)
        }
    })
    return result
}

