# test_axios 
### : 데이터 바이딩 테스트 (Vue.js + Express + Axios)
###
### + 참고 자료 + 
> https://marshmello.tistory.com/64
+ 위의 소스 그대로 하면 에러 발생함!
+ 원인은 버전 충돌로 Vue3으로 아래와 같이 설치한 뒤 그에 관련된 문법으로 수정해야함.
###
### + 환경 설정 + 
+ root : vue/cli, axios, express 설치 
> npm install -g @vue/cli

> vue create frontend
>> Vue 3 선택!!

> npm install axios --save  

> npm install -g express-generator 

> express --view=pug backend
+ frontend : Vue3 프로젝트 생성, vue-router 설치, router/index.js 추가.
> npm install vue-router@next 
+ backend : express 프로젝트 생성.
###
### + 프로젝트 테스트 +
+ frontend :
> npm run build
+ backend :
> run start
###
### + 에러 히스토리 + 
+ Vue.js와 vue-router 버전 충돌. Vue2 지원안함.
+ Vue3으로 소스 변경.
+ 