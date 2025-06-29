<script>
import ProductList from '@/selfcheck/ProductList.vue';
import ProductDetail from '@/selfcheck/ProductDetail.vue';

export default {
  components: {
    ProductList,
    ProductDetail,
  },
  data() {
    return {
      products: [
        {
          id: 1, // 고유값
          name: '바나나', // 상품명
          price: 1000, // 가격
          amount: 10, // 재고
        },
        {
          id: 2,
          name: '오렌지',
          price: 2000,
          amount: 5,
        },
        {
          id: 3,
          name: '딸기',
          price: 5000,
          amount: 12,
        },
        {
          id: 4,
          name: '블루베리',
          price: 3000,
          amount: 1,
        },
      ],
    };
  },
  methods: {
    clickHandler(param) {
      console.log(`${param}`);
    },
  },
};
</script>
<template>
  <ProductList>
    <ul>
      <li v-for="(product, id) in products" :key="product.id" @click="($event) => clickHandler(product.id)">
        {{ product.id }} - {{ product.name }}
      </li>
    </ul>
  </ProductList>
</template>