const target = {
    message1: 'hello',
    message2: 'proxy',
};
const handler = {
    get(target, property, receiver) {
        if (property === 'message1') return 'hi';
        return Reflect.get(...arguments); // 나머지는 원래값
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.message1, proxy.message2);