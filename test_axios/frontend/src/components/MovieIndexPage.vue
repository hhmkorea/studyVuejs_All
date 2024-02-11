<template>
  <div class="movies">
    <h1>5월 마지막주 영화 예매 순위</h1>
    <ul class="movies">
      <li v-for="movie in movies" :key="movie.id" class="item">
        <span class="rank">{{ movie.id }}</span>
        <router-link :to="{ name: 'show', params: { id: movie.id } }">
          <img v-bind:src="movie.poster" class="poster"/>
        </router-link>
        <div class="detail">
          <strong class="tit">{{ movie.name }}</strong>
          <span class="rate"
          >예매율 <span class="num">{{ movie.rate }}</span></span
          >
          <router-link
              :to="{ name: 'show', params: { id: movie.id } }"
              class="link"
          >자세히보기
          </router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
const axios = require('axios');
export default {
  created() {
    // 컴포넌트가 생성될 때, /api/movies에 요청을 보냅니다.          
    axios.get('/api/movies')
        .then((res) => {
          this.movies = res.data;
          console.log(res.data);
          //console.log(JSON.stringify(res.data)); // json 형태로 보여줌
        })
        .catch((err) => {
          alert(err);
        });
  },
  data() {
    return {
      movies: []
    }
  }
}
</script>