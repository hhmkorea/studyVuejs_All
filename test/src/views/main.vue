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
        <b-form-input />
        <b-button variant="search"><i class="bi bi-search"></i> </b-button>
      </div>
      <div class="guidehash">
        <span v-for="(item,index) in hashdata" :key="index" v-html="item.text"></span>
      </div>
    </section>
    <section class="bannermenu"></section>
    <section class="notice">
      <h1 class="mainit">공지 사항</h1>
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
      ]
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
  },
};
</script>