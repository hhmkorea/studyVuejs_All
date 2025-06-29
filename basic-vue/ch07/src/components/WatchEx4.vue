<script setup>
import {reactive, watch} from "vue";

const state = reactive({
  count:0,
});
// 내부 값이 변경되었는지 감시할 수 있지만, currentValue = prevValue
watch(state, (currentValue, prevValue) => { // watch() 함수의 콜백 함수 제대로 실행됨.
  console.log(currentValue, prevValue);
});
</script>

<template>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="state.count++">reactive 증가</button>
</template>

<style scoped>

</style>