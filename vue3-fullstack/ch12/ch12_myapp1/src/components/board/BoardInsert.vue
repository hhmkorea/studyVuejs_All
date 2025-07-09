<template>
  <div class="grid-container">
    <h2>공지사항 작성</h2><hr />
    <form @submit.prevent="handleSubmit">
      <label>제목</label><input type="text" v-model="title" required />
      <label>내용</label><textarea v-model="content" rows="5" required ></textarea>
      <label>작성자</label><input type="text" v-model="author" required />
      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script setup>
import {useMainStore} from "@/store";
import {ref} from "vue";
import {useRouter} from "vue-router";

const mainStore = useMainStore();
const { insertBoard } = mainStore;
const router = useRouter();

const title = ref('');
const content = ref('');
const author = ref('');

const handleSubmit = async () => {
  await insertBoard({
    title: title.value,
    content: content.value,
    author: author.value,
  });
  router.push('/boards');
};
</script>