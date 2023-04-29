function solution(sides) {
    sides = sides.sort((a, b) => b - a)
    return sides.slice(1).reduce((a, b) => a + b, 0) - sides[0] <= 0 ? 2 : 1;
}