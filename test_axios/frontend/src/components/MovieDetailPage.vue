<template>
  <div class="detail">
    <h1>{{ movie.name }}</h1>
    <img v-bind:src="movie.poster" class="poster">
    <section>
      <h2>영화정보</h2>
      <dl class="movie">
        <dt>감독</dt>
        <dd>{{ movie.director }}</dd>
        <dt>출연</dt>
        <dd>{{ movie.actors }}</dd>
        <dt>러닝타임</dt>
        <dd>{{ movie.time }}</dd>
      </dl>
    </section>
    <section>
      <h2>줄거리</h2>
      <p v-html="movie.synopsis" class="synopsis"></p>
    </section>
    <router-link :to="{ name: 'index', params: { id: movie.id } }" class="link">돌아가기</router-link>
  </div>
</template>
<script>
const axios = require('axios');
export default {
  created () {
    let id = this.$route.params.id;
    console.log("id:", id);

    axios.get('/api/movies/'+id+'')
        .then((res) => {
          this.movie = res.data[0];
          console.log(res.data);
          //console.log(JSON.stringify(res.data)); // json 형태로 보여줌
        })
        .catch((err) => {
          alert(err);
        });
  },
  data () {
    return {
      movie: {}
    }
  }
}
</script>