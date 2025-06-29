<script setup>
import {ref, watch} from "vue";

const count = ref(0); // 반응형 데이터
watch(count, (currentValue, prevValue) => {
  console.log(currentValue, prevValue); // 반응형 데이터 자체만 감시.
});
</script>

<template>
  <h1>ref: {{ count }}</h1>
  <button @click="count++">ref 증가</button>
</template>

<style scoped>

</style>