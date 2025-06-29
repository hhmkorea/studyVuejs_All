<script setup>
import {computed, reactive, ref} from "vue";

const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });

// ref() 데이터 활용 시 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2); // computed() : 인수로 콜백 함수를 넣음.
// reactive() 데이트는 value 속성이 필요없음.
const reactiveDoubleCount = computed(() => reactiveCount * 2);

setTimeout(() => {
  refDoubleCount.value = 20; // 1초 뒤에 경고 표시
}, 1000);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1> <!-- 에러!! [Vue warn] Write operation failed: computed value -->
</template>

<style scoped>

</style>