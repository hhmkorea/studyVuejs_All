<template>
  <div class="card">
    <div class="card-header">글쓰기</div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3"> <!-- 글 제목 입력란 -->
          <label for="title" class="form-label">글 제목</label>
          <input type="text" class="form-control" id="title" v-model="title" required>
        </div>
        <div class="mb-3"> <!-- 글 내용 입력란 -->
          <label for="content" class="form-label">글 내용</label>
          <textarea type="text" class="form-control" id="content" rows="5" v-model="content" required></textarea>
        </div>
        <div class="mb-3"> <!-- 작성자 입력란 -->
          <label for="content" class="form-label">작성자</label>
          <input type="text" class="form-control" id="author" v-model="author" required>
        </div> <!-- 버튼 -->
        <button type="submit" class="btn btn-primary me-2">글쓰기</button>
        <button type="button" class="btn btn-secondary" @click="cancelForm">취소</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const title = ref(""); // 입력데이타
const content = ref("");
const author = ref("");
const submitForm = () => { // 폼 제출 함수
  alert(`제목: ${title.value}\n내용: ${content.value}\n작성자: ${author.value}`);
  title.value = ''; // 폼 초기화
  content.value = '';
  author.value = '';
}

const cancelForm = () => { // 폼 취소 함수
  if (confirm('작성을 취소하시겠습니까?')) {
    title.value = ''; // 폼 초기화
    content.value = '';
    author.value = '';
  }
};
</script>

<style scoped>
.card {
  max-width: 600px;
  margin: 0 auto;
}
</style>