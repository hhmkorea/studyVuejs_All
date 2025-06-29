<script>

</script>

<template>
  <button class="btn">
    <slot>제출</slot>
  </button>
</template>

<!-- scoped : 특정 컴포넌트에 정의된 스타일의 정의가 나도 모르게 다른 컴포넌트에 영향을 주는 것을 막아줌 -->
<style scoped>
.btn {
  width: 80px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>