<script setup>
import {useRoute} from "vue-router";

const route = useRoute(); // 라이프사이클 훅이나 함수 밖에서 먼저 선언해야함!!

const id = route.params.id;
console.log(id);
</script>

<template>
  <h1>id: {{ id }}</h1>
</template>
