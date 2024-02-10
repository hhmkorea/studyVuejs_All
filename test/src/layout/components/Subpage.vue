<template>
  <section class="subpage">
    <div class="contentbox">
      <div class="titlebar">
        <h1><i class="bi bi-bookmark-check"></i>{{ pageit }}</h1>
        <div class="pagenavi">
          <span><i class="bi bi-house-door"></i>홈</span>
          <strong>{{ pageit }}</strong>
        </div>
      </div>
      <slot></slot> <!--콘텐츠 영역-->
    </div>
  </section>
</template>
<script>
export default {
  props: ["pageit"], // 페이지 제목
};
</script>