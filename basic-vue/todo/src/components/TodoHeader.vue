<script>
export default {
  name: "TodoHeader",
  props: {                                  //-- 1. props 속성으로 부모 컴포넌트에서 전달한 current 데이타 받기.
    current: { // props : 부모가 전달한 current 데이터 받음.
      type: String,
      default() {
        return 'all';
      },
    },
  },
  emits:['update-tab'],                     //-- 4. emits : 무분별한 이벤트 발신을 막기위해 update-tab 이벤트를 명시적으로 지정
  methods: {
    updateTab(tab) {                        //-- 3. updateTab() 함수 정의, $emit() 부모 컴포넌트의 update-tab 호출
      this.$emit('update-tab', tab);
    },
  },
}
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">                  <!-- 2. current 데이터로 class 속성을 동적으로 바인딩, v-on(@)로 current 데이터 변경 이벤트(updateTab()) 등록 -->
      <li :class="{ 'todo__tab--active' : current === 'all'}" @click="updateTab('all')">전체</li>
      <li :class="{ 'todo__tab--active' : current === 'completed'}" @click="updateTab('completed')">완료</li>
    </ul>
  </div>
</template>

<style scoped>

</style>