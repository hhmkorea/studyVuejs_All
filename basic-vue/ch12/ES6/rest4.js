function greet(greeting, ...names) {
    names.forEach((name) => {
       console.log(`${greeting}, ${name}!`);
    });
}
greet('Hello', 'Kim', 'Park', 'Yun');
