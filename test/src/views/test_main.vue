<template>
  <section class="maincontents">메인 영역
    <button v-on:click="event"> test </button>
  </section>
</template>

<script>
export default {
  methods: {
    event: function () {
      alert("1");
    }
  },
};
</script>