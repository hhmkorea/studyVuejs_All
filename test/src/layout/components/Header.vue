<template>
  <header>
    <div class="topmenu">
      <div class="contentbox">
        <div class="logo">
          <button>
            <img src="/images/logo.png" alt="이지스퍼블리싱 로고" />
          </button>
        </div>
        <div class="system">
            <button class="login">로그인</button>
            <button class="member">회원가입</button>
        </div>
      </div>
    </div>
    <nav>
      <div class="contentbox">
        <ul>
          <li v-for="(item, index) in menulists" :key="index">
            <button v-html="item"></button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menulists: ["도서 소개", "자료실", "동영상 강의", "교재 샘플", "회사 소개"],
    }
  }
};
</script>