<script setup>
import {reactive} from "vue";

const state = reactive({ // 참조 자료형만 가능
  count: 0,
});
console.log(state.count); // 0
setTimeout(() => {
  state.count++;
}, 1000);
</script>

<template>
  <h1>state : {{ state.count }}</h1>
</template>

<style scoped>

</style>