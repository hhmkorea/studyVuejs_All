<script setup>
import {ref} from "vue";

const inputRef = ref(null); // ref() : template 태그의 DOM 요소를 참조할 수 있음. 초기값은 null.
setTimeout(() => {
  console.log(inputRef.value);
  console.log(inputRef.value.innerText);
}, 1000);
</script>

<template>
  <h1 ref="inputRef">Hello Ref</h1>
</template>

<style scoped>

</style>