<script setup>
import {computed, reactive, ref} from "vue";

const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });

// ref() 데이터 활용 시 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2); // computed() : 인수로 콜백 함수를 넣음.
// reactive() 데이트는 value 속성이 필요없음.
const reactiveDoubleCount = computed(() => reactiveCount * 2);

// computed() 데이터를 출력할 때는 똑같이 value 사용
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1> <!-- Nah: 반응형 변수로 중간에 값 변경이 들어가야 함. -->
</template>

<style scoped>

</style>