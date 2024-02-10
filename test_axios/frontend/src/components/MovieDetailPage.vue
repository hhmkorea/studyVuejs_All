<template>
<!--  <div class="detail" v-if="!!loading">-->
  <div class="detail">
    <h1>{{ movie.name }}</h1>
    <img :src="movie.poster" class="poster">
    <section>
      <h2>영화정보</h2>
      <dl class="info">
        <sapn>감독</sapn>
        <sapn>{{ movie.director }}</sapn>
        <sapn>출연</sapn>
        <sapn>{{ movie.actors }}</sapn>
        <sapn>러닝타임</sapn>
        <sapn>{{ movie.time }}</sapn>
      </dl>
    </section>
    <section>
      <h2>줄거리</h2>
      <p v-html="movie.synopsis" class="synopsis"></p>
    </section>
    <router-link :to="{ name: 'index', params: { id: movie.id }}" class="link">돌아가기</router-link>
  </div>
</template>
<script>
const axios = require('axios');

export default {
  created: function () {
    //this.loading = true;
    let id = this.$route.params.id;
    console.log("id:", id);

    axios.get('/api/movies/${'+id+'}')
        .then((res) => {
          this.movie = res.data[0]
          console.log(res);
          //this.loading = false;
        })
        .catch((res) => {
          console.error(res);
        });
  },
  data: function () {
    return {
      movie: {},
      //loading: false
    }
  }
}
</script>