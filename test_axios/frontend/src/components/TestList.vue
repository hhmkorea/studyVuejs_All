<template>
  <div class="app">
    <h1>TestList</h1>
    <div class="movieList">
      <router-link :to="{ name: 'movieList'}"  class="link" >영화 데이타</router-link>
    </div>
    <div class="weather">
      <router-link :to="{ name: 'weather'}"  class="link" >날씨 데이타</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: "TestList",
}
</script>