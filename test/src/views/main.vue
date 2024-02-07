<template>
  <section class="maincontents">
    <selection class="mainbanner"><img src="/images/mainimg.png" /></selection>
    <selection class="newbook">
      <h1 class="mainit">
        새로 나온 도서<span>분야별로 새로 나온 도서를 만나 보세요.</span>
      </h1>
      <div class="tapcontent">
        <div class="tap">
          <b-button variant="tap active" >IT 전문서</b-button>
          <b-button variant="tap">업무 능력, 기타</b-button>
          <b-button variant="tap">사진 예술</b-button>
          <b-button variant="tap">데이터 과학</b-button>
        </div>
        <VueSlickCarousel class="mainslider" v-bind="settings">
          <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
            <span class="imgbox"><img :src="item.imgurl" /></span>
            <strong v-html="item.name"></strong>
            <span class="textbox" v-html="item.subdec"></span>
          </div>
        </VueSlickCarousel>
      </div>
    </selection>
    <selection class="searchbook">
      <h1 class="mainit">
        도서 검색<span>찾고자 하는 도서명을 검색해 주세요.</span>
      </h1>
    </selection>
    <selection class="bannermenu"></selection>
    <selection class="notice">
      <h1 class="mainit">공지 사항</h1>
    </selection>
  </section>
</template>
<script>
export default {
  data() {
    return {
      Newbooks: [
        {
          imgurl: "/images/books_image/book01.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
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
    };
  },
};
</script>