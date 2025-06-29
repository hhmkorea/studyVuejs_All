<script>
// Options API --------------------------------
import {mapActions, mapState} from "pinia";
import {useCountOptionStore} from "@/stores/countOption.js";
import {useCountSetupStore} from "@/stores/countSetup.js";

export default {
  computed: {
    // this.num, this.doubleNum에 등록됨.
    ...mapState(useCountOptionStore, ['num', 'doubleNum']), // myState1 - 스토어 객체에서 정의한 이름으로 컴포넌트에 등록됨.
    ...mapState(useCountSetupStore, {
      myNum: 'num',           // myState2 - 1과 같지만 this.myNum에 등록됨.
      myDouble: 'doubleNum',  // myState2 - 1과 같지만 this.doubleNum에 등록됨.
    }),
  },
  methods: {
    // this.increment(), this.getJson()에 등록됨
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']), // mapActions1
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment', // mapActions2 - 1과 같지만 this.myIncre()에 등록됨.
      myJSON: 'getJSON',    // mapActions2 - 1과 같지만 this.myJSON()에 등록됨.
    }),
  },
}
</script>
<template>
  <p>Home View</p>
  <!-- this 키워드 생략 해서 그냥 사용 -->
  <h2>myState1 - num: {{ num }}</h2>
  <h2>myState1 - doubleNum: {{ doubleNum }}</h2>
<!--  <h2>myState2 - num: {{ myNum }}</h2>-->
<!--  <h2>myState2 - doubleNum: {{ myDouble }}</h2>-->
  <button @click="increment">increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">getJSON</button> <!-- jsonplaceholder : 가짜 데이터가 필요할때 언제든지 사용할 수 있는 무료 REST API -->
</template>