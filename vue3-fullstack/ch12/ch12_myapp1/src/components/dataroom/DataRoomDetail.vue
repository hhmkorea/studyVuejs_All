<template>
  <div class="grid-container">
    <div class="card">
      <div class="card-divider">
        <h1>자료실 상세</h1><hr/>
      </div>
      <div class="card-section">
        <h2>제목: {{ dataRoomDetail.title }}</h2>
        <p>작성자: {{ dataRoomDetail.author }}</p>
        <p style="font-weight: bold">내용</p>
        <p>{{ dataRoomDetail.content }}</p>
        <p><a :href="'/uploads/' + dataRoomDetail.datafile" download>{{ dataRoomDetail.datafile }}</a></p>
        <p>조회수: {{ dataRoomDetail.hits }}</p>
      </div>
      <div class="button-group">
        <button @click="goBack" class="button">목록</button>
        <button @click="editDataRoom" class="button primary">수정하기</button>
        <button @click="deleteDataRoom" class="button primary">삭제하기</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMainStore } from '@/store';

const mainStore = useMainStore();
const { fetchDataRoomDetail, dataRoomDetail } = mainStore;

const route = useRoute();
const router = useRouter();

onMounted(() => fetchDataRoomDetail(route.params.dno));

const goBack = () => {
  router.push({
    name: 'DataRoomList'
  });
};

const editDataRoom = () => {
  router.push({
    name: 'DataRoomEdit',
    params: { dno: route.params.dno }
  });
};

const deleteDataRoom = async () => {
  if (confirm("정말 삭제하시겠습니까?")) {
    await mainStore.deleteDataRoom(route.params.dno);
    goBack();
  };
};
</script>    