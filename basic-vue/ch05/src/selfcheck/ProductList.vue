<script>
import ProductDetail from "@/selfcheck/ProductDetail.vue";

export default {
  name: "ProductList",
  components: {ProductDetail},
 // App 컴포넌트에서 전달받은 상품 정보로 상품 목록을 표시

}
</script>

<template>
  <slot>
  </slot>
</template>

<style scoped>

</style>