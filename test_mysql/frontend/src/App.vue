<template>
  <div id="app">
    <CurrentWeather />
  </div>
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";

export default {
  name: "App",
  components: {
    CurrentWeather,
  },
};
</script>