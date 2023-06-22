let n = 5;
let arr = [2, -4, 7, 0, -1];

let thirdNumberSquare = arr[2] * arr[2];
let sumOfFirstAndLast = arr[0] + arr[n-1];
let sumOfNegativeSquares = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
        sumOfNegativeSquares += arr[i] * arr[i];
    }
}

console.log("Квадрат третього числа: " + thirdNumberSquare);
console.log("Сума першого і останнього елемента: " + sumOfFirstAndLast);
console.log("Сума квадратів від'ємних елементів: " + sumOfNegativeSquares);
