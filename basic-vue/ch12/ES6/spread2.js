const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // 깊은 복사, arr1 원본은 영향 안받음. 중첩된 배열과 객체에서는 사용 못함.
arr2[0] = 10;

console.log(arr1);
console.log(arr2);