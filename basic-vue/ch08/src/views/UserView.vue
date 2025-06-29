<script>
// Options API -----------------

export default {
// URL : /user/info?name=hhm&age=30
  beforeMount() {
    const name = this.$route.query.name;
    const age = this.$route.query.age;
    console.log(name);
    console.log(age);
  }
}
</script>
<!--
<script setup>
// Composition API &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;

import {useRoute} from "vue-router";
import {onBeforeMount} from "vue";

const route = useRoute();

// URL : /user/info?name=hhm&age=30
onBeforeMount(() => {
  const name = route.query.name;
  const age = route.query.age;
  console.log(name);
  console.log(age);
});
</script>
-->

<template>
  <h1>User View</h1>
</template>
