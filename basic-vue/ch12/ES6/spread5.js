const obj1 = { a: 1, b: 2};
const obj2 = { a: 3, c: 4};
const mergedObj = { ...obj1, ...obj2 }; // obj1.a가 obj2.a 값으로 덮어써짐.

console.log('...obj1, ...obj2: ', mergedObj);
console.log('obj1: ', obj1);
console.log('obj2: ', obj2);