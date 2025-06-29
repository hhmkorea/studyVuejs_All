const person = {
    firstName: '김',
    lastName: '영희',
    age: 30,
    country: '서울',
};
const {firstName, lastName, ...details} = person;
console.log(firstName);
console.log(lastName);
console.log(details);