<script>
export default {
  name: "SelfCheck",
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    increment($event){
      if (this.value > 9) {
        return alert('10까지만 증가합니다.');
      }
      this.value = this.value + 1;
    },
    decrement($event){
      if (this.value < 1) {
        return alert('0까지만 감소합니다.');
      }
      this.value = this.value - 1;
    },
  }
}
</script>

<template>
  <p>{{ value }}</p>
  <button type="button" @click="($event) => increment($event)">증가</button>
  <button type="button" @click="($event) => decrement($event)">감소</button>
</template>

<style scoped>

</style>