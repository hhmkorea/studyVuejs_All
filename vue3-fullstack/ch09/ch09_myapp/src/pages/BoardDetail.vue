<template>
  <div class="board-detail pure-g">
    <div class="pure-u-1">
      <h1>게시글 상세보기</h1>
      <div v-if="board" class="board-content">
        <h2>{{ board.title }}</h2>
        <p><strong>작성자:</strong>{{ board.author }}</p>
        <p><strong>작성일시:</strong>{{ board.resdate }}</p>
        <p><strong>조회수:</strong>{{ board.visited }}</p>
        <p>{{ board.content }}</p>
        <div class="button-group">
          <button @click="deleteBoard" class="pure-button pure-button-error">[글 삭제]</button>
          <router-link to="'/boards/edit/' + board.no" class="pure-button pure-button-primary">[글 수정]</router-link>
          <router-link to="/boards" class="pure-button">[글 목록]</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute();
const router = useRouter();
const board = ref(null);
const fetchBoard = () => {
  fetch(`http://localhost:8081/boards/detail/${route.params.no}`)
      .then(res => res.json())
      .then(data => {
        board.value = data;
      })
      .catch(err => {
        console.error('Error fetching boards: ', err);
      });
};
const deleteBoard = () => {
  fetch(`http://localhost:8081/boards/delete/${board.value.no}`, {
    method: 'DELETE',
  })
      .then(() => {
        router.push('/boards');
      })
      .catch(err => {
        console.error('Error fetching boards: ', err);
      });
  onMounted(fetchBoard);
};
</script>