<template>
  <section class="maincontents">
    <section class="mainbanner"><img src="/images/mainimg.png" /></section>
    <section class="newbook">
      <h1 class="mainit">
        새로 나온 도서<span>분야별로 새로 나온 도서를 만나 보세요.</span>
      </h1>
      <div class="tapcontent">
        <div class="tap">
          <b-button variant="tap active" @click="AddContents('Newbooks_it')">IT 전문서</b-button>
          <b-button variant="tap" @click="AddContents('Newbooks_work')">업무 능력, 기타</b-button>
          <b-button variant="tap" @click="AddContents('Newbooks_photo')">사진 예술</b-button>
          <b-button variant="tap" @click="AddContents('Newbooks_science')">데이터 과학</b-button>
        </div>
        <VueSlickCarousel class="mainslider" v-bind="settings">
          <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
            <span class="imgbox"><img :src="item.imgurl" /></span>
            <strong v-html="item.name"></strong>
            <span class="textbox" v-html="item.subdec"></span>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <section class="searchbook">
      <h1 class="mainit">
        도서 검색<span>찾고자 하는 도서명을 검색해 주세요.</span>
      </h1>
      <div class="inputarea">
        <b-form-input v-model="keyword"/>
        <b-button variant="search"><i class="bi bi-search"></i> </b-button>
        <div class="autolayer" v-if="keyword.length > 0" :class="{ none: autocomplate.length === 0 }">
          <ul v-if="autocomplate.length > 0">
            <li v-for="(item, index) in autocomplate[0].books" :key="index" v-html="item.booktit"></li>
          </ul>
          <div class="nonemesessage" v-else>
            <i class="bi bi-x-circle-fill"></i> 검색 결과가 없습니다.
          </div>
        </div>
      </div>
      <div class="guidehash">
        <span v-for="(item,index) in hashdata" :key="index" v-html="item.text"></span>
      </div>
    </section>
    <section class="bannermenu">
      <div class="itembox" v-for="(item, index) in mainbanner" :key="index" @click="gotoPage(item.url)">
        <span v-html="item.stitle"></span>
        <strong v-html="item.maintit"></strong>
        <i class="bi" :class="item.iconname"></i>
      </div>
    </section>
    <section class="notice">
      <div class="noticebox">
        <h1 class="mainit">공지 사항</h1>
        <b-button variant="noticemore" @click="viewmore($event)"/>
        <div class="newsitem" v-for="(item, index) in noticelists" :key="index">
          <strong v-html="item.noticetit"></strong>
          <span v-html="item.date"></span>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      Newbooks: [],
      Newbooks_it: [
        {
          imgurl: "/images/books_image/book01.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
      ],
      Newbooks_work: [
        {
          imgurl: "/images/books_image/book08.jpg",
          name: "된다! 엑셀 수식 & 함수",
          subdec: "매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을...",
        },
      ],
      Newbooks_photo: [
        {
          imgurl: "/images/books_image/book15.jpg",
          name: "포토샵 보정&합성 디자인 사전",
          subdec: "포토샵 사진 보정, 합성 때문에 고민인가요? 한 권으로 상위...",
        },
      ],
      Newbooks_science: [
        {
          imgurl: "/images/books_image/book21.jpg",
          name: "블록체인 무엇인가?",
          subdec: "이 책은 과장된 소문에 휘둘리지도, 비트코인에 집중하지도 않는...",
        },
      ],
      settings: {
        slidesToShow: 5, // 화면에 나타날 슬라이드 개수
        arrows: true,    // 버튼 사용 여부
        dots: false,     // 하단 버튼 사용 여부
        infinite: true,  // 슬라이드 반복 여부
        responsive: [
          // 반응형 옵션
          {
            breakpoint: 767,     // 브라우저 크기가 767 이하일 때
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 414,     // 브라우저 크기가 464 이하일 때
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      hashdata: [
        { text: "html", value: "html" },
        { text: "vue", value: "vue" },
        { text: "css", value: "css" },
        { text: "javascript", value: "javascript" },
        { text: "자료구조/알고리즘", value: "자료구조/알고리즘" },
        { text: "파이썬", value: "파이썬" },
      ],
      booksname: [
        {
          cata: "html",
          books: [
            { booktit: "Do it! 웹 사이트 따라 만들기", author: "김윤미" },
            { booktit: "Do it! HTML+CSS_자바스크립트 웹 표준의 정석", author: "고경희" },
            { booktit: "Do it! 반응형 웹 만들기", author: "김운아" },
            { booktit: "Do it! 인터랙티브 웹 페이지 만들기", author: "최성일" },
          ],
        },
        {
          cata: "vue",
          books: [
            { booktit: "Do it! vue.js 입문", author: "장기효" },
          ],
        },
        {
          cata: "javascript",
          books: [
            { booktit: "Do it! 프로그래시브 웹앱 만들기", author: "김응석" },
            { booktit: "모던 자바스크립트 프로그래밍의 정석", author: "고경희" },
          ],
        },
      ],
      keyword: "",
      mainbanner: [
        {
          stitle: "교수 및 강사 전용",
          maintit: "교재 샘플/강의 자료",
          iconname: "bi-stickies",
          url: "/classsample",
        },
        {
          stitle: "스터디 카페",
          maintit: "Do it! 스터디룸",
          iconname: "bi-book-half",
          url: "https://cafe.naver.com/doitstudyroom",
        },
        {
          stitle: "이지스 SNS",
          maintit: "페이스북",
          iconname: "bi-facebook",
          url: "https://www.facebook.com/esayspub/",
        },
      ],
      noticelists: [
        {
          noticetit: "이지스퍼블리싱/이지스에듀 저작물 이용 지침",
          date: "2023.03.30",
        },
        {
          noticetit: "IT 분야 편집/기획자 모집",
          date: "2023.02.16",
        },
        {
          noticetit: "이지스퍼블리싱 전자책 대여 서비스 오픈!",
          date: "2021.10.28",
        },
      ],
    };
  },
  created() { // Vue Life Cycle 중 Created() Hook. Vue 인스턴스가 생성되고 호출됨.
    this.Newbooks = this.Newbooks_it;
  },
  methods: {
    AddContents(contents) { // Tap 클릭하고 받은 컨텐츠
      this.Newbooks = this[contents]; // Tap 클릭하고 받은 컨텐츠 값을 보여줌.
      document.querySelector(".active").classList.remove("active"); // 현재 클래스 리스트에서 "active" 삭제.
      event.target.classList.add("active");
      /*
       + classList()
       : 클래스 속성을 나타내는 DOMTokenList.
         클래스 속성이 설정되어 있지 않거나 비어 있다면 elementClasses.length는 0을 반환함.
       + classList().add("active")
       : 기존 설정된 클래스 값에 "active" 클래스 값을 추가, 이미 존재한다면 무시. */
    },
    gotoPage(url) {
      if (url == "/classsample") {
        this.$router.push(url);
      } else {
        window.open(url, "_blank");
      }
    },
    viewmore(event) {
      if(event.target.parentElement.classList.value.indexOf("full") >  -1) {
        /* indexOf()
         : 배열에서 매개변수로 전달받은 요소를 찾아 첫 번째 인덱스를 반환하고 없으면 -1을 반환.
           return 값을 검사한 후 Boolean 형태로 활용할 수 있어서
           배열에 클래스나 데이터가 있는지 확인하는 용도록 자주 사용.
        */
        event.target.parentElement.classList.remove("full")
      } else {
        event.target.parentElement.classList.add("full"); // full 클래스를 동적으로 추가.
      }
      //console.log(event.target.parentElement.classList);
    }
  },
  computed: {
    autocomplate() {
      const resultlists = this.booksname.filter((item) => {
        if (item.cata.match(this.keyword))
          return item;
      });
      return resultlists;
    }
  }
};
</script>