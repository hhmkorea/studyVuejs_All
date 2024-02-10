<template>
  <Subpage :pageit="'도서 소개'">
    <div class="bookpage">도서 소개
      <VueSlickCarousel class="subpageslider" v-bind="settings">
        <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
          <span class="imgbox"><img :src="item.imgurl" /></span>
          <strong v-html="item.name"></strong>
        </div>
      </VueSlickCarousel>
    </div> <!--<slot>으로 대체될 영역-->
  </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
  components: {
    Subpage,
  },
  data() {
    return {
      Newbooks: [
        {
          imgurl: "/images/books_image/book01.jpg",
          name: "Do it! 웹 사이트 따라 만들기",
          subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...",
        },
        {
          imgurl: "/images/books_image/book08.jpg",
          name: "된다! 엑셀 수식 & 함수",
          subdec: "매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을...",
        },
        {
          imgurl: "/images/books_image/book15.jpg",
          name: "포토샵 보정&합성 디자인 사전",
          subdec: "포토샵 사진 보정, 합성 때문에 고민인가요? 한 권으로 상위...",
        },
        {
          imgurl: "/images/books_image/book21.jpg",
          name: "블록체인 무엇인가?",
          subdec: "이 책은 과장된 소문에 휘둘리지도, 비트코인에 집중하지도 않는...",
        },
        {
          imgurl: "/images/books_image/book02.jpg",
          name: "첫 알고리즘",
          subdec: "자료구조부터 보안, 인공지능까지 최신 알고리즘 총망라!",
        },
        {
          imgurl: "/images/books_image/book04.jpg",
          name: "IT 잡학사전",
          subdec: "IT 외계어, 5분 안에 싹 정리",
        },
        {
          imgurl: "/images/books_image/book05.jpg",
          name: "SQL 입문",
          subdec: "주식,매출,부동산,인구 분석까지 실제 데이터로 연습한다!.",
        },
        {
          imgurl: "/images/books_image/book06.jpg",
          name: "Do it! 클론코딩 줌",
          subdec: "노마드 코더와 만드는 화상 채팅 서비스",
        },
        {
          imgurl: "/images/books_image/book07.jpg",
          name: "Do it! 오토캐드 2023",
          subdec: "평면도 그리기부터 치수 문제 해결까지!",
        },
        {
          imgurl: "/images/books_image/book10.jpg",
          name: "된다!} 톡써니의 아이패드 하루 24시간",
          subdec: "아이패드 하나로 일상을 바꾼다!",
        },
      ],
      settings: {
        slidesToShow: 8, // 데스크톱 8개
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 5, // 태블릿 5개
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2, // 모바일 2개
            },
          },
        ],
      },
    };
  },
};
</script>
