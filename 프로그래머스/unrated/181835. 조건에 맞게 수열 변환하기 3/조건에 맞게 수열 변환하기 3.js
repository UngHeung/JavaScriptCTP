function solution(arr, k) {
    return arr = arr.map(v => k % 2 ? v * k : v + k)
}