<script setup>
const emit = defineEmits(['count-increment', 'state-count-increment']); // defineEmits() : 부모가 전달한 이벤트 받기.
const increment = () => { //-- 1. 별도의 함수로 이벤트 호출
  emit('count-increment', 10, 20, 30);
};
</script>

<template>
  <button @click="increment">count 증가</button>
  <button @click="emit('state-count-increment', [50])">state.count 증가 </button> <!-- 2. 이벤트 직접 호출 -->
</template>

<style scoped>

</style>