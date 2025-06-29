const { name, age, address: {city, zipcode} } = {
    name: '철수',
    age: 30,
    address: {
        city: '서울',
        zipcode: '13111',
    }
}
console.log(name);
console.log(age);
console.log(city);
console.log(zipcode);