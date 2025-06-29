<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <!-- 공통 하단 영역 -->
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__item">
        <a href="/">
          <span class="material-symbols-outlined footer_icons"> home </span>
        </a>
      </li>
      <li>
        <a href="/forecast">
            <span class="material-symbols-outlined footer_icons">
              stacked_line_chart
            </span>
        </a>
      </li>
      <li>
        <a href="/search">
          <span class="material-symbols-outlined footer_icons"> search </span>
        </a>
      </li>
    </ul>
  </footer>
</template>
