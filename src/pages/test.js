// let multiply = function (x, y) {
//   console.log(x * y)
// }

// let multiply = function (y) {
//   return function (x) {
//     console.log(x - y)
//   }
// }

// let multiplyByTwo = multiply(3)
// multiplyByTwo(1)
// function tripleAdd(num1) {
//   return function (num2) {
//     return function (num3) {
//       console.log(num1 + num2 + num3)
//     }
//   }
// }
// tripleAdd(1)(2)(3)

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b)
    }
    return a
  }
}
const mySum = sum(2)(3)(4)
console.log(mySum())
export default function Test() {
  return <h1>Hi</h1>
}
