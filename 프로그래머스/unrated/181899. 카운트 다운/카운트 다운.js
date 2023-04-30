function solution(start, end) {
    return Array.from({length:start-end+1}, el=>start--)
}