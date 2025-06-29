<script>

import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoInput from "@/components/TodoInput.vue";

export default {
  components: {TodoInput, TodoList, TodoHeader},
  data() {
    return {
      todo: [],                     //-- 1. todo 데이터 정의, 할 일 데이터 여러개 관리하므로 배열.
      current: 'all',       // 현재 목록 상태 관리 데이터
    };
  },
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    }
  },
  methods: {
    addTodo(inputMsg) {             //-- 2. 입력받은 택스트를 사용해 할 일 목록을 구성할 객체 데이터 생성.
      const item = {                //-- 3. todo 데이터 정의
        id: Math.random(),  // 고유한 값
        msg: inputMsg,      // 할 일 텍스트
        completed: false,    // 할 일 완료 여부
      };
      this.todo.push(item);         //-- 4. 할 일 목록 객체 데이터를 todo 데이터에 추가.
    },
    updateTab(tab) {        // updateTab 이벤트 정의
      this.current = tab;
    },
    deleteTodo(id) {        // 할 일 삭제
      this.todo = this.todo.filter((v) => v.id !== id); // 현재 선택한 아이디 제외하고 리스트에 보여줌.
      // filter : 콜백함수의 반환값들이 true인 요소로만 구성된 새로운 배열을 반환 
    },
    updateTodo(id) {        // 할 일 수정 : todo 데이터에 접근해 completed 속성값을 변경
      this.todo = this.todo.map((v) => v.id === id ? { ...v, completed: !v.completed } : v); // 현재 선택한 아이디가 같으면 현재 설정된 'completed'값 반대로 설정, 아닌건 그대로
      // map : 콜백함수의 반환값들로 이루어진 새로운 배열을 반환한다.
    },
  },
}
</script>

<template>
  <div class="todo">
    <!-- current 데이터를 TodoHeader 컴포넌트에 전달 -->
    <!-- v-vind:current="current" 축약 -->
    <TodoHeader :current="current" @update-tab="updateTab" /> <!-- updateTab 이벤트 등록 -->
    <TodoList :computed-todo="computedTodo" @delete-todo="deleteTodo" @update-todo="updateTodo" />
    <TodoInput @add-todo="addTodo" /> <!-- 5. addTodo()를 v-on 사용해서 TodoInput 컴포넌트에 전달 -->
  </div>
</template>

<style scoped>
</style>
