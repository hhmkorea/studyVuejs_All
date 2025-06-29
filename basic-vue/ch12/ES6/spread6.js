const obj1 = { a: 1, b: 2};
const obj2 = { ...obj1 }; // 깊은 복사
obj2.a = 10; // 깊은 복사라서 obj1.a는 영향을 받지 않음.

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);