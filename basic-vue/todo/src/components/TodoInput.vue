<script>

export default {
  name: "TodoInput",
  data() {
    return {
      inputMsg: '', // 할일 입력하는 text 데이터 선언
    };
  },
  emits: ["addTodo"],
  methods: {
    addTodo() {
      this.$emit('addTodo', this.inputMsg); // $emit() : 부모 컴포넌트 이벤트 호출
      this.inputMsg = ""; // 입력 데이터 초기화
    },
  },
}
</script>

<template>
  <div class="todo__input">
    <!-- 정의한 데이터를 양방향 바인딩 -->
    <input v-model="inputMsg" type="text" class="todo__input-text" placeholder="할 일을 입력하세요."/>
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>

<style scoped>

</style>