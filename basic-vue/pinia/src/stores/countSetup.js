import { defineStore } from 'pinia';
import {computed, ref} from "vue";

export const useCountSetupStore = defineStore('countSetup', () => {
    const json = ref(null);
    const num = ref(10); // reactive()로 배열이나 객체 값을 생성해도 됨.
    const doubleNum = computed(() => num.value * 2); // computed() 정의한 데이터는 같은 <script> 태그 영역에서는 .value 속성으로 사용해야 함.
    const doubleNumPlusOne = computed(() => doubleNum.value + 1); // 게터에서 다른 게터를 참조할 때는 .value 속성을 사용해 접근.

    const increment = () => {
        num.value++;
    };

    const getJSON = (url) => {
        increment(); // 다른 액션(함수) 호출
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                json.value = json;
            });
    };
    return {
        num,
        doubleNum,
        doubleNumPlusOne,
        json,
        increment,
        getJSON,
    };
});