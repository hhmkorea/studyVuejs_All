<script setup>
const emits = defineEmits(['update']);  // defineEmits() : 컴포넌트에서 다른 컴포넌트로 전달한 이벤트를 전달 받을때
const props = defineProps({             // defineProps() : 컴포넌트에서 다른 컴포넌트로 데이터를 전달할때
  num: Number,
});
</script>

<template>
  <h1>상태: {{ props.num }}</h1>
  <button @click="emits('update')">상태 업데이트</button>
</template>
