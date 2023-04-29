function solution(sides) {
    sides = sides.sort((a, b) => b - a)
    return sides[2] + sides[1] - sides[0] <= 0 ? 2 : 1;
}