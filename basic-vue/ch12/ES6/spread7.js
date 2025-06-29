// function sum(a, b, c) {
//     return a + b + c;
// }
const sum = (a, b, c) =>  a + b + c;

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);