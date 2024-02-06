# test 프로젝트
+ 아래 교재 실습
> 프런트엔드UI개발 with Vue.js - 김윤미 지음
> https://github.com/my-yoon/Doit-Project.git
###
### + Vue 프로젝트 환경
+ Bootstrap : 반응형 웹 디지인을 위한 CSS 프레임 워크.
+ Lint : 코드 품질을 높이는 도구
+ Babel : Cross Browsing 이슈 해결하기 위해 탄생한 툴. ES6+ 문법을 하위 브라우저에서도 동작할 수 있는 js로 변환할 수 있음.
+ VueRouter : 
> router-link : 페이지 내에서 다른 컴포넌트로 이등

> router-view : 컴포넌트 자체를 동적으로 변경.
+ Component : Vue.js 화면 구성할 때 < template > 안에 작성. 가상 DOM, 하나의 부모 요소로만 구성해야함. 메모리 상에 존재하며 변경된 부분만 업데이트. 불필요한 DOM 동작 최소화.  
###
### + 레이아웃 기준
+ 가로 크기 1,200px, maxwidth, flex-box를 사용한 반응형
> 모바일 : 767px 이하

> 태블릿 : 768px 이상 1024px 이하

> PC : 1025px 이상

### + common.css
+ Header영역 : after 가상요소 적용.
+ Footer영역 : before 가상요소 적용.
+ @media screen : 반응형 적용. 
> 템플릿 안에서만 적용할 스타일 정의 할때는 각 컴포넌트의 < style scoped > 안에 정의. 
###
### + 템플릿 문법
+ 보간법 : interpolation, 콧수염 문법, {{}}, HTML 요소에 데이터를 바인딩할 때 사용.
+ v-html 
+ v-bind: or :
+ v-on: or @
+ v-if
+ v-show
+ v-for
+ < slot > : 특정 영역을 다른 컴포넌트에서 작성한 내용으로 대체할때 사용.