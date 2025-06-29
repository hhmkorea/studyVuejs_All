const obj = {
    name: 'dotdot',
    printName() {
        console.log(1, this);
        const inner =() => {
            console.log(2, this);
        }
        inner();
    }
}
obj.printName();
