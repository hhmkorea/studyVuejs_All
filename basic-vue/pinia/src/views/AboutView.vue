<script setup>
// Composition API --------------------------------

import {useCountOptionStore} from "@/stores/countOption.js";
import {useCountSetupStore} from "@/stores/countSetup.js";
import {storeToRefs} from "pinia";

const optionStore = useCountOptionStore();  // 옵션 스토어 객체로 인스턴스 생성
const setupStore = useCountSetupStore();    // 셋업 스토어 객체로 인스턴스 생성
const {num, doubleNum} = storeToRefs(optionStore); // storeToRefs(setupStore)도 가능.

// 객체에 접근하듯이 인스턴스로 스테이트, 게터, 액션 모두 일관되게 사용
console.log(optionStore.num);       // 스테이트 num
console.log(setupStore.doubleNum);  // 게터 doubleNum

optionStore.increment();            // 액션 increment
setupStore.getJSON('https://jsonplaceholder.typicode.com/posts'); // 액션 getJSON

console.log(num, doubleNum);
</script>
<template>
  <p>About View</p>
</template>
