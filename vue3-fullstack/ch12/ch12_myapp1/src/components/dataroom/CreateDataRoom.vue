<template>
  <div class="grid-container">
    <h1>자료 등록</h1><hr />
    <form @submit.prevent="submitDataRoom" enctype="multipart/form-data" method="post">
      <label>제목</label><input type="text" v-model="title" required />
      <label>내용</label><textarea v-model="content" required></textarea>
      <label>작성자</label><input type="text" v-model="author" required />
      <label>파일</label><input type="file" @change="handleFileUpload" />
      <button type="submit" class="button primary">등록</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/store';

const mainStore = useMainStore();
const { createDataRoom } = mainStore;
const router = useRouter();

const title = ref('');
const content = ref('');
const author = ref('');
const datafile = ref(null);

const handleFileUpload = (event) => datafile.value = event.target.files[0];

const submitDataRoom = async () => {
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("author", author.value);
  formData.append("datafile", datafile.value);

  await createDataRoom(formData);

  router.push({
    name: 'DataRoomList'
  });
};
</script>    