<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <br>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>
