<script>
// Options API
export default {
  beforeMount() {
    console.log('beforeMount');
    document.title = this.$route.meta.title;
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    replaceWithAbout() {
      this.$router.replace('/about');
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
  },
}
</script>
<template>
  <p>Home View</p>
  <nav>
    <a href="#" @click.prevent="$router.push('/')">.push</a>
    <br/>
    <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
    <br/>
    <a href="#" @click.prevent="$router.go(-1)">.go</a>
    <br/>
    <a href="#" @click.prevent="$router.forward">.forward</a>
    <br/>
    <a href="#" @click.prevent="$router.back()" id="sub">.back</a>
  </nav>
</template>