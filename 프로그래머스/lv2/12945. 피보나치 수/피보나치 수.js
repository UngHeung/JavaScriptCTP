function solution(n) {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(f(arr))
        arr[i-1]%=1234567
    }
    return arr[arr.length - 1] % 1234567;
}

function f(arr) {
    return arr[arr.length - 2] + arr[arr.length - 1]
}