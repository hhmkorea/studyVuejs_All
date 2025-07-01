<template>
  <div class="board-edit">
    <h1>게시글 수정</h1>
    <form @submit.prevent="updateBoard" class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label>제목:</label><input v-model="board.title" required />
        </div>
        <div class="pure-control-group">
          <label>내용:</label><textarea v-model="board.content" required ></textarea>
        </div>
        <div class="pure-control-group">
          <label>작성자:</label><input v-model="board.author" required />
        </div>
        <div class="pure-controls">
          <button type="submit" class="pure-button pure-button-primary">[글 수정]</button>
          <router-link to="/boards" class="pure-button">[글 목록]</router-link>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute();
const router = useRouter();
const board = ref({});

const fetchBoard = () => {
  fetch(`http://localhost:8081/boards/detail/${route.params.no}`)
      .then(res => res.json())
      .then(data => {
        board.value = data;
      })
      .catch((err) => {
        console.error('Error fetching boards: ', err);
      });
};

const updateBoard = () => {
  fetch(`http://localhost:8081/boards/update/${board.value.no}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(board.value),
  })
      .then(() => { router.push('/boards'); })
      .catch(err => { console.error('Error updating boards: ', err); });
};
onMounted(fetchBoard);
</script>