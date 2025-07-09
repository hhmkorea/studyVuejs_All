<template>
  <div class="grid-container">
    <div class="card">
      <div class="card-divider">
        <h2>공지사항 수정</h2><hr />
      </div>
      <div class="card-section">
        <form @submit.prevent="handleUpdate">
          <label>제목</label><input v-model="title" required />
          <label>내용</label><textarea v-model="content" rows="5" required ></textarea>
          <label>작성자</label><input v-model="author" disabled />
          <div class="button-group">
            <button type="submit" class="button primary">수정 완료</button>
            <button @click="cancelEdit" class="button secondary" type="button">취소</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/store";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const mainStore = useMainStore();
const { fetchBoardDetail, updateBoard } = mainStore;
const route = useRoute();
const router = useRouter();

const title = ref('');
const content = ref('');
const author = ref('');

onMounted(async () => {
  await fetchBoardDetail(route.params.no);
  const board = mainStore.boardDetail;
  title.value = board.title;
  content.value = board.content;
  author.value = board.author;
  console.log("board : " + board);
});

const handleUpdate = async () => {
  await updateBoard(route.params.no, {
    title: title.value,
    content: content.value,
    author: author.value,
  });
  router.push(`/boards/detail/${route.params.no}`);
};

const cancelEdit = () => {
  router.push(`/boards/detail/${route.params.no}`);
};
</script>