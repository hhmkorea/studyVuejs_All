<script>

export default {
  name: "TodoList" ,
  props: {
    computedTodo: { // props: 부모가 전달한 computedTodo 데이터 받음.
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteTodo(id) { // 할 일 삭제
      this.$emit('delete-todo', id); // $emit : 부모 컴포넌트 함수 호출
    },
    updateTodo(id) { // 할 일 수정
      this.$emit('update-todo', id); // $emit : 부모 컴포넌트 함수 호출
    },
  },
}
</script>

<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때(완료 시 todo__item--completed 클래스 추가)-->
    <div v-for="item in computedTodo" :key="item.id" class="todo__item" :class="{ 'todo__item--completed' : item.completed }">
      <input type="checkbox" :id="`chk${item.id.toString()}`" :checked="item.completed" @click="updateTodo(item.id)" />
      <label :for="`chk${item.id.toString()}`" class="todo__checkbox-label"></label>
      <span class="todo__item-text">{{ item.msg }}</span>
      <span class="material-symbols-outlined todo__delete-icon" @click="deleteTodo(item.id)">delete</span>
    </div>
    <!-- 할 일 목록이 없을 때 -->
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할 일이 없습니다.</p>
    </div>
  </div>

</template>

<style scoped>

</style>