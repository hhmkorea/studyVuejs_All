<template>
  <div class="section">
    <div v-if="store.loading" class="progress">
      <div class="indeterminate">
      </div>
    </div>
    <div v-else-if="movie">
      <h2 class="center-align">{{ movie.movieNm }}</h2>
      <div class="card">
        <div class="card-content">
          <p><strong>박스오피스 순위 : </strong>{{ movie.rank}}</p>
          <p><strong>영화 코드 : </strong>{{ movie.movieCd}}</p>
          <p><strong>영화명 : </strong>{{ movie.movieNm}}</p>
          <p><strong>개봉일 : </strong>{{ movie.openDt}}</p>
          <p><strong>관객수 : </strong>{{ movie.audiCnt}}명</p>
          <p><strong>누적 관객수 : </strong>{{ movie.audiAcc}}명</p>
        </div>
      </div>
      <ReviewList :movieId="movie.movieCd" /><!-- 리뷰 목록 -->
      <div class="card"><!-- 리뷰 등록 폼 -->
        <div class="card-content">
          <h5>리뷰 등록</h5>
          <form @submit.prevent="submitReview">
            <div class="input-field">
              <input v-model="newReview.author" id="author" type="text" required />
              <label for="author">작성자</label>
            </div>
            <div class="input-field">
              <textarea v-model="newReview.content" id="content" class="materialize-textarea" required></textarea>
            </div>
            <button class="btn waves-effect waves-light" type="submit">리뷰 등록</button>
          </form>
        </div>
      </div>
      <div class="center-align"><!-- 영화 목록으로 돌아가기 버튼 -->
        <router-link to="/movies" class="btn waves-effect waves-light blue">영화 목록으로 돌아가기</router-link>
      </div>
    </div>
    <div v-else class="card-panel yellow lighten-4 yellow-text text-darken-4">
      해당 영화를 찾을 수 없습니다.
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, ref} from "vue";
import M from 'materialize-css';
import ReviewList from "./ReviewList.vue";
import store from "../store/index.js";

const route = useRoute();
const router = useRouter();

const movieId = computed(() => route.params.id);
const movie = computed(() => store.getMovieById(movieId.value));

console.log(movie);

const newReview = ref({
  author: '',
  content: '',
});

const submitReview = () => {
  if (newReview.value.author && newReview.value.content) {
    store.addReview(movieId.value, { ...newReview.value });
    newReview.value.author = '';
    newReview.value.content = '';
    M.toast({
      html: '리뷰가 등록되었습니다!',
      classes: 'rounded',
    });
  } else {
    M.toast({
      html: '모든 필드를 채워주세요.',
      classes: 'rounded red',
    });
  }
}
</script>
