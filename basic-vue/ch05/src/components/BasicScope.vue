<script>
export default {
  data() {
    return {
      message: 'child',
      count: 10,
    };
  },
}
</script>

<template> <!-- slot 태그의 name 속성은 예약된 기능이 있어서 name 속성의 값에는 접근할 수 없다.-->
  <slot :message="message" :count="count"></slot>
</template>

<style>
</style>