const target = {
    message1: 'hello',
    message2: 'proxy',
};
const handler = {
    set(target, property, value, receiver) {
        if (property === 'message1') {
            return false; // message1 속성은 값 변경을 허용하지 않음.
        } else {
            target[property] = value;
            return true;
        }
    },
};
const proxy = new Proxy(target, handler);
proxy.message1 = 'hey'; // set() 메서드에 의해 값이 변경되지 않음
proxy.message2 = 'ye';
console.log(proxy.message1);
console.log(proxy.message2);