<script setup>
// Composition API
import {onBeforeMount} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
  console.log('onBeforeMount');
  document.title = route.meta.title;
});

const navigateToHome = () => {
  router.push(6);
};
const replaceWithAbout = () => {
  router.replace('/home');
};
const go = () => {
  router.go(1);
};
const goForward = () => {
  router.forward();
};
const goBack = () => {
  router.back();
};
</script>
<template>
  <p>About View</p>
  <nav>
    <a href="#" @click.prevent="router.push('/')">.push</a>
    <br/>
    <a href="#" @click.prevent="router.replace('/home')">.replace</a>
    <br/>
    <a href="#" @click.prevent="router.go(-1)">.go</a>
    <br/>
    <a href="#" @click.prevent="router.forward">.forward</a>
    <br/>
    <a href="#" @click.prevent="router.back()" id="sub">.back</a>
  </nav>
</template>
