import {reactive} from "vue";
import {defineStore} from 'pinia';
export const useCartStore = defineStore('cart', () => { // defineStore() : 스토어 생성
    const item =reactive([
        {
            id: 1,
            name: 'banana',
            price: 1000,
        },
        {
            id: 2,
            name: 'orange',
            price: 3000,
        },
        {
            id: 3,
            name: 'mango',
            price: 5000,
        },
        {
            id: 4,
            name: 'apple',
            price: 4000,
        },
    ]);
    const cartItem = reactive([]);  // 장바구니 아이템
    const outCart = (id) => { // 장바구니에서 상품 삭제 기능, cartItem에 id 삭제
        const indexToRemove = cartItem.findIndex((v) => v === id);
        if (indexToRemove !== -1) {
            cartItem.splice(indexToRemove, 1); // splice() : 해당 인덱스, 1개 삭제
        }
        console.log("outCart - cartItem : ", cartItem);
    };
    return { item, cartItem, outCart };
})