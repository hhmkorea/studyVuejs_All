<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">{{ taskRegion.name }} 날씨 상세</h2>
    <div v-if="store.loading" class="flex justify-center">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16">
      </div>
    </div>
    <div v-else-if="taskRegion">
      <div class="bg-white shadow rounded p-6">
        <p><strong>온도:</strong> {{ taskRegion.weather.temperature }}ºC</p>
        <p><strong>바람 속도:</strong> {{ taskRegion.weather.windspeed }}km/h</p>
        <p><strong>풍향:</strong> {{ taskRegion.weather.winddirection }}º</p>
        <p><strong>날짜:</strong> {{ formattedDate }}</p>
      </div>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded" @click="goBack">날씨 목록으로 돌아가기</button>
    </div>
    <div v-else class="text-yellow-500">
      해당 지역의 날씨 정보를 찾을 수 없습니다.
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";
import store from "../store/index.js";

const route = useRoute();
const router = useRouter();

const regionId = computed(() => parseInt(route.params.id)); // 현재 경로 파라미터에서 id값을 가져와 숫자로 변환
const taskRegion = computed(() => store.regions.find(r => r.id === regionId.value)); // store.regions 배열에서 regionId와 일치하는 지역을 찾음

const formattedDate = computed(() => { // 현재 날짜를 YYYY-MM-DD 형식으로 포맷합니다.
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`
});

const goBack = () => {
  router.push('/weather');
}
</script>

<style scoped>
.loader {
  border-top-color: #3498db;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>