# study Vue.js
###
### *** 폴더별 정보 ***
####
#### + test 시리즈 +
+ test : Vue.js 교재 실습
> 프런트엔드UI개발 with Vue.js - 김윤미 지음
> https://github.com/my-yoon/Doit-Project.git
+ test_axios : Vue.js + Express + MySQL 
> https://marshmello.tistory.com/64 
+ ref_doc : 참고용 문서, React와 Vue.js 비교 정리, 각각의 Life Cycle 이미지.
###
#### + my-pjt 시리즈  + 
+ my-pjt : 
#
#
#
### *** Vue.js 메모 *** 
###
#### + Vue 구성 요소 +
+ VueRouter :
> router-link : 페이지 내에서 다른 컴포넌트로 이등

> router-view : 컴포넌트 자체를 동적으로 변경.
+ Component : Vue.js 화면 구성할 때 < template > 안에 작성. 가상 DOM, 하나의 부모 요소로만 구성해야함. 메모리 상에 존재하며 변경된 부분만 업데이트. 불필요한 DOM 동작 최소화.
###
#### + Vue.js 템플릿 문법 +
+ 보간법 : interpolation, 콧수염 문법, {{}}, HTML 요소에 데이터를 바인딩할 때 사용.
+ v-html
+ v-bind: or :
+ v-on: or @
+ v-if
+ v-show
+ v-for
+ < slot > : 특정 영역을 다른 컴포넌트에서 작성한 내용으로 대체할때 사용.
###
#### + Vue.js 주요 속성 +
+ Vue.js 설계 원칙 
> 단방향 데이터 흐름 : 데이터가 변경될 때 상위 컴포넌트에서 하위 컴포넌트로 전달. 
>> SPA : Single Page Application 
+ porps 
+ $emit 
+ EventBus 
+ Vuex 라이브러리 : 상태 관리를 위한 중앙 집중식 저장소 라이브러리. 
> store.js
>> React-Redux에도 store.js가 있음. store를 구독하여 컴포넌트 데이타 변화 state를 처리함. 
+ v-model : v-bind 와 v-on 기능을 합친것. 입력과 동시에 데이터 변경됨.
> v-model은 수동으로 양방향 데이터 바인딩 가능함. 
+ computed : data 속성에 지정된 값이 변경될 때마다 자동으로 감지하여 해당 값으로 계산된 결과를 저장해줌. 
> 사용 예: 회원가입시 아이디 중복 여부 확인.
+ watch : watch 속성 안에 정의된 데이터를 감지. 데이터가 변경되는 시점에 특정 동작을 수행할 때 사용.
> 사용 예: 라우터의 변경(페이지 이동)에 따라 외부 데이터를 불러 올때
+ b-form : < b-form-group > 안에 < label > 태그 자동으로 만들어 줌. 
+ $nextTick()
> DOM 업데이트가 완료되고 추가 작업을 수행하고 싶을때 사용. (예:데이터가 변경된 후 DOM요소에 접근하여 특정 스타일 변경 등 작업 수행)

###
#### + UI 프레임워크 +
+ Merterial Design : 기본에 충실한 단순한 디자인, 빛과 그림자 효과를 이용 입체감 살림.
> Bootstrap Vue : 반응형 디자인과 웹 접근성에 최적화. 컴포넌트 이름 b-로 시작 

> Vue-Slick-Carousel : 반응형 웹을 지원하는 슬라이더 라이브러리.
#
#
#
### *** 기타 메모 *** 
###
#### + JS +
+ classList() 
> 클래스 속성을 나타내는 DOMTokenList. 클래스 속성이 설정되어 있지 않거나 비어 있다면 elementClasses.length는 0을 반환함. 
+ classList().add("active")
> 기존 설정된 클래스 값에 "active" 클래스 값을 추가, 이미 존재한다면 무시.
+ indexOf()
> 배열에서 매개변수로 전달받은 요소를 찾아 첫 번째 인덱스를 반환하고 없으면 -1을 반환.
return 값을 검사한 후 Boolean 형태로 활용할 수 있어서 배열에 클래스나 데이터가 있는지 확인하는 용도록 자주 사용.

###
#### + event 매개변수 + 
+ console.log('event.target : ', event.target); // 이벤트가 발생한 DOM 요소
+ console.log('event.currentTarget : ', event.currentTarget); // 이벤트 핸들러가 연결된 DOM 요소
+ console.log('event.type : ', event.type); // 이벤트 유형
###
#### + BootStrap +
+ variant 속성 : BootStrap button에 붙는 속성.
> varitant="login" 
+ HTML 변환시 이렇게 보임.
> class="btn btn-login" 
        