<script>
export default {
  mounted() {
    console.log(this.$parent.parentNum);
    console.log(this.$parent.numOddEven);
    console.log(this.$parent.getParentNum());
  }
}
</script>

<template>
  <h3>ParentChild</h3>
</template>

<style>
</style>