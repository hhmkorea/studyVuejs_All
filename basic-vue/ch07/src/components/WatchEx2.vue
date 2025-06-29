<script setup>
import {ref, watch} from "vue";

const state = ref({
  count:0, // 배열이나 객체의 속성 값 변경은 감시하지 않음.
});
watch(state, (currentValue, prevValue) => { // watch() 함수의 콜백 함수가 제대로 실행하지 않음.
  console.log(currentValue, prevValue);
});
</script>

<template>
  <h1>ref: {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>

<style scoped>

</style>