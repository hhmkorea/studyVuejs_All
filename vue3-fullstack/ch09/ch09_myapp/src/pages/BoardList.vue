<template>
  <div class="board-list pure-g">
    <div class="pure-u-1">
      <h1>게시판 목록</h1>
      <ul class="pure-menu-list">
        <li class="pure-menu-item" v-for="board in boards" :key="board.no">
          <router-link class="pure-menu-link" :to="'/boards/detail/' + board.no">{{ board.title }}</router-link>
          <router-link class="pure-button pure-button-primary" to="/boards/insert">[글등록]</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const boards = ref([]);
const fetchBoards = () => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8081/boards/list`)
        .then((res) => {
          if (!res.ok)
            throw new Error('Network response was not ok');
          return res.json()
        })
        .then(data => {
          boards.value = data;
          resolve(data);
        })
        .catch(err => {
          console.error('Error fetching boards: ', err);
          reject(err)
        });
  });
};
onMounted(fetchBoards);
</script>
