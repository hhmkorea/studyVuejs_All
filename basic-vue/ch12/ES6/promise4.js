// ES6 이후 비동기 처리 방식 : Promise 객체 사용

/* Promise 객체 기본 문법 ------------

    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 수행, 작업이 완료되기 전까지 대기 상태
        // 성공적으로 작업이 완료되면 resolve()를 호출해 이행 상태로 전환
        // 작업이 실패하면 reject()를 호출해 거부 상태로 전환
    });

    promise.then(result => {
        // 작업이 성공적으로 완료되었을 때 실행할 코드
    }).catch(error => {
        // 작업이 실패했을 때 실행할 코드
    });

*/

function a() {
    console.log('a()호출됨!');
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('a');
            resolve(); // a 함수가 끝났음을 알림.
        }, 3000);
    });
}

function b() {
    console.log('b()호출됨!');
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('b');
            resolve(); // b 함수가 끝났음을 알림.
        }, 2000);
    });
}

function c() {
    console.log('c()호출됨!');
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('c');
            resolve(); // c 함수가 끝났음을 알림.
        }, 1000);
    });
}

// 순차적으로 호출
a()
    .then(() => b())
    .then(() => c())
    .catch((error) => {
        console.error('Error: ', error);
    });
