// ES6 이전 비동기 처리 방식 : 실행 순서와 출력 순서를 같게 하기 위한 비동기 처리 방식 --> 콜백 함수 중첩 지옥, 가독성 떨어짐.
function a(callback) {
    console.log('a()호출됨!')
    setTimeout(function () {
        console.log('a');
        callback();
    }, 3000);
}
function b(callback) {
    console.log('b()호출됨!')
    setTimeout(function () {
        console.log('b');
        callback();
    }, 2000);
}
function c(callback) {
    console.log('c()호출됨!')
    setTimeout(function () {
        console.log('c');
    }, 1000);
}
// 콜백 함수가 콜백 함수를 호출하는 콜백 지옥 패턴
a(() => {
    b(() => {
        c();
    });
});