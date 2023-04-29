function solution(price) {
    return price>=500000?~~(price*=.8):price>=300000?~~(price*=.9):price>=100000?~~(price*=.95):price
}