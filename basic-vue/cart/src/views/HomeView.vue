<script setup>
import {useCartStore} from "@/stores/cart.js";
import {storeToRefs} from "pinia";

const cartStore = useCartStore(); // cart.js에서 생성한 store 객체
const { item } = storeToRefs(cartStore); // storeToRefs() : pinia의 store 객체를 Vue.js 3의 ref 객체로 변환하는 함수. ---> item : 상품에 대한 객체가 배열로 들어있음.

const inCart = (id) => { // 장바구니에 상품 추가 기능, cartItem에 id 추가
  cartStore.cartItem.push(id); // 장바구니 아이템에 추가
  console.log("inCart-cartItem(id):", cartStore.cartItem);
};
const outCart = (id) => { // 장바구니에서 상품 삭제 기능, cartItem에 id 삭제
  // cartStore.cartItem = cartStore.cartItem.filter((v) => v !== id); // 장바구니 아이템에 지정된 아이템을 제외하고 필터로 담아둠. --> cartItem : 장바구니에 추가한 상품의 id가 담겨있음.
  cartStore.outCart(id);
  console.log("outCart-cartItem(id):", cartStore.cartItem);
};
</script>
<template>
  <h1>상품 목록</h1>
  <RouterLink to="/cart">장바구니</RouterLink>
  <ul>
    <li v-for="it in item" :key="it.id" :class="{ in: cartStore.cartItem.includes(it.id) }"> <!-- 장바구니에 있는 id와 동일하면 스타일 클래스(.in) 반영-->
      <span>{{ it.name }}</span>
      <span>{{ it.price }}</span>
      <button v-if="!cartStore.cartItem.includes(it.id)" @click="inCart(it.id)">담기</button>
      <button v-else @click="outCart(it.id)">삭제</button>
    </li>
  </ul>
</template>
<style scoped>
.in {
  text-decoration: line-through;
}
</style>