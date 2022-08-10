let M = 0
let D = 0
let N = 1234567
while (N > 0) {
    D = N % 10
    if (D > M) {
        M = D
    }
    N = N / 10
}
basic.showNumber(M)
