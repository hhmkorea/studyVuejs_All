<template>
  <header>
    <nav class="pure-menu pure-menu-horizontal">
      <router-link to="/" class="pure-menu-heading">메인으로 이동</router-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link to="/boards" class="pure-menu-link">게시판목록</router-link>
        </li>
        <li>
          <router-link to="/boards/insert" class="pure-menu-link">게시판 글 등록</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
