<template>
  <header>
    <div class="topmenu">
      <div class="contentbox">
        <div class="logo">
          <button v-on:click="goToPage('/main')">
            <img src="/images/logo.png" alt="이지스퍼블리싱 로고" />
          </button>
        </div>
        <div class="system">
            <button class="login" v-b-modal.login>로그인</button>
            <button class="member">회원가입</button>
        </div>
      </div>
    </div>
    <nav>
      <div class="contentbox">
        <ul>
          <li v-for="(item, index) in menulists" :key="index" v-on:click="goToPage(item.link)">
            <button v-html="item.menutext"></button>
          </li>
        </ul>
      </div>
    </nav>
    <b-modal id="login" class="modal" hide-footer >
      <template #modal-title>
        <div class="layertit"><i class="bi bi-clipboard-check" />로그인</div>
      </template>
      <div clas="loginform">
        <label for="id"><i clas="bi bi-file-person" />아이디</label>
        <b-form-input id="id" placeholder="아이디를 입력해 주세요" />
        <label for="pass"><i class="bi bi-lock" />비밀번호</label>
        <b-form-input type="password" id="pass" placeholder="비밀번호를 입력해 주세요" />
        <div class="btnwrap">
          <b-button variant="login">로그인</b-button>
        </div>
      </div>
    </b-modal>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menulists: [
        { menutext: "도서 소개", link: "/book" },
        { menutext: "자료실", link: "/reference" },
        { menutext: "동영상 강의", link: "/movieclass" },
        { menutext: "교재 샘플", link: "/classsample" },
        { menutext: "회사 소개", link: "/company" },
      ],
    };
  },
  methods: {
    goToPage(target) {
      if(this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },
  },
};
</script>