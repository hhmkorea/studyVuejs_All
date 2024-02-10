<template>
  <Subpage :pageit="'도서 소개'">
    <div class="bookpage">도서 소개</div> <!--<slot>으로 대체될 영역-->
  </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
  components: {
    Subpage,
  },
};
</script>
