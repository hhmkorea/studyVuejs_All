<template>
  <Subpage :pageit="'자료실'">
    <div class="referencepage">
      <div class="subpageguide">
        도서와 관련된 추가 자료를 다운로드 할 수 있습니다.
      </div>
      <div class="listwrap">
        <div class="listnum">
          총 <strong v-html="lists.length">237</strong>건이 등록되어 있습니다.
        </div>
        <div class="listbox">
          <div class="listitem" v-for="(item, index) in lists" :key="index">
            <div class="listhum"><img :src="item.img" /> </div>
            <div class="listdetail">
              <strong v-html="item.title"></strong>
              <div class="listdate">등록일 : {{ item.date }}</div>
              <div class="listdec" v-html="item.dec"></div>
              <div class="itembtns">
                <b-button variant="listdown" :href="item.link1">
                  <i class="bi bi-folder-symlink" />소스 파일 내려받기</b-button>
                <b-button variant="listdown" :href="item.link2">
                  <i class="bi bi-table" />정오표</b-button>
              </div>
              <div class="downguide">
                ※ 다운로드가 안 될 경우 <br />회사에서 접속한 경우 사내 보안
                등의 이유로 다운로드가 되지 않을 수 있습니다. <br />
                고객센터로 연락주시면 별도로 송부하겠습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
  components: { Subpage },
  data() {
    return {
      lists: [
        {
          imag: "/images/books_image/book01.jpg",
          title: "Do it! 실습 파일과 학습 파일 내려받기",
          date: "2019.05.15",
          dec : "책을 다 공부한 독자를 위한 실전 프로젝트입니다. <br />" +
              "웹 사이트에서 자주 사용하는 '이미지 슬라이드 쇼' 프로그램을 " +
              "만드는 방법을 단계별로 공부할 수 있습니다.",
          link1: "", // 소스 파일 경로
          link2: "", // 정오표 경로
        },
        {
          imag: "/images/books_image/book05.jpg",
          title: "Do it! SQL입문 실습 파일과 학습 파일 내려받기",
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