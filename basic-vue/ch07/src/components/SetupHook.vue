<script>
import { ref, reactive } from "vue";

export default {
  name: "SetupHook",
  setup() {
    const count = ref(0);
    // const state = reactive({
    //   count: 0,
    //   message: 'Hello',
    // });
    return {
      count,
      // state,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
  },
}
</script>

<template>
  <h1>----- SetupHook -----</h1>
  <h1>Count: {{ count }}</h1>
  <h2>Double Count: {{ doubleCount }}</h2>
  <button @click="increment">증가</button>
</template>

<style scoped>

</style>