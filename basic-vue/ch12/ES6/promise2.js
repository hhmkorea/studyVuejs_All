function a() {
    console.log('a()호출됨!')
    setTimeout(function () {
        console.log('a');
    }, 3000);
}
function b() {
    console.log('b()호출됨!')
    setTimeout(function () {
        console.log('b');
    }, 2000);
}
function c() {
    console.log('c()호출됨!')
    setTimeout(function () {
        console.log('c');
    }, 1000);
}
a();
b();
c();