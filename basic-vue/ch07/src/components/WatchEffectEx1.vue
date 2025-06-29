<script setup>
import {reactive, ref, watch, watchEffect} from "vue";

const count = ref(0);
const state = reactive({ count: 0 });

watchEffect(() => {
  console.log(count.value); // count 변수의 값이 변경되면 호출
  console.log(state.count); // state 객체의 count 속성 값이 변경되면 호출
});
</script>

<template>
  <h1>ref: {{ count }}</h1>
  <button @click="count++">ref 증가</button>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="state.count++">reactive 증가</button>
</template>

<style scoped>

</style>