<template>
  <Subpage :pageit="'도서 소개'">
    <div class="bookpage">도서 소개
      <VueSlickCarousel class="subpageslider" v-bind="settings">
        <div class="rollimg" v-for="(item, index) in Newbooks" :key="index">
          <span class="imgbox"><img :src="item.imgurl"/></span>
          <strong v-html="item.name"></strong>
        </div>
      </VueSlickCarousel>
      <section class="bookdetail">
        <h1 class="booktitle">
          Do it! 웹 사이트 따라 만들기
          <span>HTML, CSS, 자바스크립트, JQuery, Ajax로 웹 퍼블리싱</span>
        </h1>
        <div class="book-info">
          <div class="imgview">
            <div class="imgbook">
              <img src="/images/books_image/book01.jpg" alt=""/>
            </div>
            <div class="bookbtns">
              <b-button variant="lightgray">
                <i class="bi bi-search"/>책 미리보기
              </b-button>
              <b-button variant="lightgray">
                <i class="bi bi-hdd"/>전자책
              </b-button>
            </div>
          </div>
          <div class="infolist">
            <ul>
              <li v-for="(item, index) in bookinfolists" :key="index">
                <span class="label" v-html="item.label"></span>
                <span class="infocontent" v-html="item.content"></span>
              </li>
            </ul>
          </div>
          <div class="book-detailinfo">
            <div class="detailTap">
              <b-form-radio name="detail-tap"
                            v-model="tapselect"
                            value="introduce"
                            button
                            button-variant="detailtap">
                <i class="bi bi-mic" />책 소개
              </b-form-radio>
              <b-form-radio name="detail-tap"
                            v-model="tapselect"
                            value="review"
                            button
                            button-variant="detailtap">
                <i class="bi bi-chat-left-text" />출판사 리뷰
              </b-form-radio>
              <b-form-radio name="detail-tap"
                            v-model="tapselect"
                            value="order"
                            button
                            button-variant="detailtap">
                <i class="bi bi-layout-text-sidebar-reverse" />목차
              </b-form-radio>
              <b-form-radio name="detail-tap"
                            v-model="tapselect"
                            value="write"
                            button
                            button-variant="detailtap">
                <i class="bi bi-journal-text" />저자 소개
              </b-form-radio>
              <b-form-radio name="detail-tap"
                            v-model="tapselect"
                            value="recommendation"
                            button
                            button-variant="detailtap">
                <i class="bi bi-person-check" />추천의 글
              </b-form-radio>
              <b-form-radio name="detail-tap"
                            v-model="tapselect"
                            value="reference"
                            button
                            button-variant="detailtap">
                <i class="bi bi-inboxes" />자료실
              </b-form-radio>
            </div>
            <template v-if="tapselect === 'introduce'">
              <div class="detailTapCon">
                <h1 class="tapcontit">
                  <strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.
                </h1>
                <p>
                  웹 어워드 코리아 대상, 최우수상을 수상한 현직 웹 퍼빌리셔의 작업 방식 그대로<br />
                  웹 사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />
                  이 책 한 권이면 웹 사이트 하나가 뚝딱 완성
                </p>
              </div>
            </template>
            <template v-if="tapselect === 'review'">
            <div class="detailTapCon">
              <h1 class="tapcontit">
                <strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.
              </h1>
              <p>(출판사 리뷰 - ...)</p>
            </div>
            </template>
            <template v-if="tapselect === 'order'">
            <div class="detailTapCon">
              <h1 class="tapcontit">
                <strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.
              </h1>
              <p>(목차 - ...)</p>
            </div>
            </template>
            <template v-if="tapselect === 'write'">
            <div class="detailTapCon">
              <h1 class="tapcontit">
                <strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.
              </h1>
              <p>(저자 소개 - ...)</p>
            </div>
            </template>
            <template v-if="tapselect === 'recommendation'">
            <div class="detailTapCon">
              <h1 class="tapcontit">
                <strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.
              </h1>
              <p>(추천의 글 - ...)</p>
            </div>
            </template>
            <template v-if="tapselect === 'reference'">
            <div class="detailTapCon">
              <h1 class="tapcontit">
                <strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.
              </h1>
              <p>(자료실 - ...)</p>
            </div>
            </template>
          </div>
        </div>
      </section>
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
      bookinfolists: [
        {label: "저자", content: "김윤미"},
        {label: "발행일", content: "2019-11-28"},
        {label: "사양", content: "312쪽 | 188*257mm"},
        {label: "ISBN", content: "979-11-6303-119-2 13000"},
        {label: "정가", content: "16,000원"},
        {label: "상태", content: "정상 판매중"},
      ],
      tapselect: "introduce",
    };
  },
};
</script>
