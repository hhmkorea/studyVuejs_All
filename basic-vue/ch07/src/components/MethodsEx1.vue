<script setup>
import {computed, reactive, ref} from "vue";

// 반응형 데이터 정의
const count = ref(0);
const state = reactive({
  count: 0,
  message: 'Hello'
});
const numberSum = computed(() => count.value + state.count);
const expressFunc = function () { // 함수 안에서도 ref()로 정의한 데이터는 .value 사용해 접근
  count.value += 1;
};
const arrowFunc = () => {
  state.count +=1;
};
</script>

<template>
  <h1>총합: {{ numberSum }}</h1>
  <h1>ref: {{ count }}</h1>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="expressFunc">ref 증가</button>
  <button @click="arrowFunc">reactive 증가</button>
</template>

<style scoped>

</style>