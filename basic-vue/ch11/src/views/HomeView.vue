<script setup>
import {useWeatherStore} from "@/store/weather.js";
import {storeToRefs} from "pinia";
import {onBeforeMount, onMounted} from "vue";
import dayjs from "dayjs";
import { getImage } from "@/composables/helper.js";
import axios from "axios";

const weatherStore = useWeatherStore();
const { currentConditions, address } = storeToRefs(weatherStore); // storeToRefs() : 반응형 유지하면서 비구조화 할당. --> currentConditions에 날씨 API 응답 데이터를 컴포넌트 내부에서 사용.

onBeforeMount(async () => {
  await weatherStore.getCityName();
  await weatherStore.getCurrentWeatherInfo(); // weather.js에 설정한 스토어 인스턴스 액션 호출
});
// onMounted(async () => { // 서울의 날씨 정보를 요청하는 API
//   const result = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seoul?key=G5QN238NEFKBYH5KUZAZLEGKX&unitGroup=metric&lang=ko');
//   console.log(result); // 날씨 데이터 객체 확인.
// });
</script>

<template>
  <header v-if="currentConditions" class="header">
    <!-- 지역 -->
    <h1 class="header__title">
      <span class="material-symbols-outlined"> location_on </span>{{  address }}</h1>
    <h2 class="header__date">{{ dayjs().format('HH:mm')}}</h2>
  </header>
  <!-- 현재 날씨 -->
  <main v-if="currentConditions" class="main">
    <article class="weather">
      <h2>{{ dayjs().format('YYYY.MM.DD') }}</h2>
      <section class="weather__info">
        <img
            :src="getImage(currentConditions.icon)"
            :alt="`${currentConditions.datetime} ${currentConditions.temp}도`"
            class="weather__img"
        />
        <h3 class="weather_temp">{{ currentConditions.temp }}</h3>
        <p class="weather_summary">{{  currentConditions.conditions }}</p>
        <ul class="weather__moreList">
          <li class="weather__moreListItem">
            <p class="weather__subtitle">습도</p>
            <p class="weather__desc">{{ currentConditions.humidity }}%</p>
          </li>
          <li class="weather__moreListItem">
            <p class="weather__subtitle">풍속</p>
            <p class="weather__desc">{{ currentConditions.windspeed }}</p>
          </li>
          <li class="weather__moreListItem">
            <p class="weather__subtitle">체감</p>
            <p class="weather__desc">{{ currentConditions.feelslike }}</p>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>
