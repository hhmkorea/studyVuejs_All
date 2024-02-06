# study Vue.js
###
### *** 폴더별 정보 ***
####
#### + test 시리즈 +
+ test : Vue.js 교재 실습
> 프런트엔드UI개발 with Vue.js - 김윤미 지음
> https://github.com/my-yoon/Doit-Project.git
###
#### + my-pjt 시리즈  + 
+ my-pjt : 
#
#
#
### *** Vue.js 학습 메모 *** 
###
#### + Vue 구성 요소 
+ VueRouter :
> router-link : 페이지 내에서 다른 컴포넌트로 이등

> router-view : 컴포넌트 자체를 동적으로 변경.
+ Component : Vue.js 화면 구성할 때 < template > 안에 작성. 가상 DOM, 하나의 부모 요소로만 구성해야함. 메모리 상에 존재하며 변경된 부분만 업데이트. 불필요한 DOM 동작 최소화.
###
#### + 템플릿 문법
+ 보간법 : interpolation, 콧수염 문법, {{}}, HTML 요소에 데이터를 바인딩할 때 사용.
+ v-html
+ v-bind: or :
+ v-on: or @
+ v-if
+ v-show
+ v-for
+ < slot > : 특정 영역을 다른 컴포넌트에서 작성한 내용으로 대체할때 사용.