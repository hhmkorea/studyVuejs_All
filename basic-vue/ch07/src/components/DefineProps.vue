<script setup>

const props = defineProps({
  count: Number,
  state: {
    //[Object, Array],
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<template>
  <h1>{{ props.count }}</h1>
  <h1>{{ props.state.count }}</h1>
</template>

<style scoped>

</style>