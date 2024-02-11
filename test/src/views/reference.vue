<template>
  <Subpage :pageit="'자료실'">
    <div class="referencepage">
      <div class="subpageguide">
        도서와 관련된 추가 자료를 다운로드 할 수 있습니다.
      </div>
      <listComm :lists="lists" />
    </div>
  </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
import listComm from "@/layout/components/listComm.vue";
export default {
  components: { Subpage, listComm },
  data() {
    return {
      lists: [
        {
          img: "/images/books_image/book01.jpg",
          title: "'Do it! 웹 사이트 따라만들기' 실습 파일과 학습 파일 내려받기",
          date: "2019.04.15",
          dec : "책을 다 공부한 독자를 위한 실전 프로젝트입니다. <br />" +
              "웹 사이트에서 자주 사용하는 '이미지 슬라이드 쇼' 프로그램을 " +
              "만드는 방법을 단계별로 공부할 수 있습니다.",
          link1: "", // 소스 파일 경로
          link2: "", // 정오표 경로
        },
        {
          img: "/images/books_image/book05.jpg",
          title: "'Do it! SQL입문' 실습 파일과 학습 파일 내려받기",
          date: "2022.11.15",
          dec : "책을 다 공부한 독자를 위한 실전 프로젝트입니다. <br />" +
              "'SQL'을 기초 문법부터 단계별로 공부할 수 있습니다,",
          link1: "", // 소스 파일 경로
          link2: "", // 정오표 경로
        },
      ]
    }
  }
}
</script>