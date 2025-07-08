<template>
  <div class="grid-container">
    <div class="card">
      <div class="card-divider">
        <h1>질문 수정</h1><hr />
      </div>
      <div class="card-section">
        <form @submit.prevent="editQuestion">
          <label>제목</label><input type="text" v-model="title" required />
          <label>내용</label><textarea v-model="content" required></textarea>
          <label>작성자</label><input type="text" v-model="author" required />
          <button type="submit" class="button primary">수정 완료</button>
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
const { fetchQuestionDetail, updateQuestion } = mainStore;

const route = useRoute();
const router = useRouter();

const title = ref('');
const content = ref('');
const author = ref('');

onMounted(async () => {
  await fetchQuestionDetail(route.params.qno);
  title.value = mainStore.questionDetail.title;
  content.value = mainStore.questionDetail.content;
  author.value = mainStore.questionDetail.author;
});

const editQuestion = async () => {
  await updateQuestion(route.params.qno, {
    title: title.value,
    content: content.value,
    author: author.value,
  });
  router.push({
    name: 'QnADetail',
    params: { qno: route.params.qno },
  });
};
</script>