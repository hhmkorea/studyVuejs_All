<script setup>

import {computed, provide, reactive} from "vue";
import Inject from "@/components/Inject.vue";

const fruits = reactive([ 'apples', 'bananas', 'oranges' ]);  // 반응형 데이터
const fruitsTxt = computed(() => `I like ${fruits[0]}`);      // 계산된 속성
provide('fruitsArr', fruits);
provide('fruitsText', fruitsTxt);
provide('userObj', { name: 'tester', age: 20 });              // 일반적인 데이터
</script>

<template>
  <Inject />
</template>
