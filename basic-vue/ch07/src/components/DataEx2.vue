<script setup>
import { ref } from 'vue';

const arr1 = ref([10]); // 배열로 반응형 데이터 생성
const arr2 = ref([10]); // 배열로 반응형 데이터 생성

setTimeout(() => {
  arr1.value = [10, 20]; // 배열의 값 자체를 변경
});

setTimeout(() => {
  arr2.push(20); // 배열 값 자체가 아닌 배열 안의 요소만 변경
});

</script>
<template>
  <h1>arr1 : {{ arr1 }}</h1> <!-- 10, 20: 반응형 데이터가 할당된 변수 값 자체가 변경되면 반응 -->
  <h1>arr2 : {{ arr2 }}</h1> <!-- 10: arr2.push is not a function 와 함께 값 변경 안됨 -->
</template>