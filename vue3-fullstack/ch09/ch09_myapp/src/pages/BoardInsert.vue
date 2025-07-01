<template>
  <div class="board-insert">
    <h1>게시글 등록</h1>
    <form @submit.prevent="insertBoard" class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label>제목:</label><input v-model="board.title" required />
        </div>
        <div class="pure-control-group">
          <label>내용:</label><input v-model="board.content" required />
        </div>
        <div class="pure-control-group">
          <label>작성자:</label><input v-model="board.author" required />
        </div>
        <div class="pure-controls">
          <button type="submit" class="pure-button pure-button-primary">[글 등록]</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const board = ref({
  title: '',
  content: '',
  author: '',
});
const insertBoard = () => {
  fetch('http://localhost:8081/boards/insert', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(board.value),
  })
      .then(() => { router.push('/boards'); })
      .catch(err => { console.error('Error deleting boards: ', err); });
};
</script>