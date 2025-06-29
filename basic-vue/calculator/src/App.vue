<script>
export default {
  data() {
    return {
      output: null,   // 출력칸에 포시되어 사용자에게 노출되는 값
      prev: null,     // 이전에 입력된 값 또는 연산 결과
      cur: null,      // 현재 입력된 값
      operator: null, // 연산자
      operatorActions: { // 사칙 연산을 수행하는 함수를 각각 객체로 정의.
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '∧': (a, b) => Math.pow(a, b),
        '√': (b) => Math.sqrt(b),
        'log': (b) => Math.log(b),
      }
    };
  },
  methods: {
    clear() { // 초기화
      this.output = null;
      this.operator = null;
      this.prev = null;
      this.cur = null;
    },
    calculation(n) { // 연산 흐름 제어
      // 저장된 숫자가 없는데 연산 기호를 클릭한 경우
      if (!this.cur && !this.prev) {
        alert('숫자를 먼저 입력하세요.');
        return;
      }
      // 사칙연산 기호를 연달아 클릭한 경우
      if (this.operator !== '' && this.operator === '∧' && this.operator === '√' && this.operator === 'log' && !this.cur) {
        alert('사칙연산 기호를 연달아 누를 수 없습니다.');
        return;
      }
      // 등호(=)를 클릭해 결과를 노출한 후 다시 등호를 클릭한 경우
      if (n === '=' && this.prev === this.cur) {
        return;
      }
      this.cur = Number(this.cur); // 현재 저장된 값을 숫자형으로 변환해서 저장.

      if (this.operator !== null) { // 사칙연산 기호면 연산 수행
        // operationActions를 객체로 정의
        // 객체의 각 속성은 함수를 값으로 가지는 메서드, 사칙연산 계산된 결과를 담아둠.
        this.prev = this.operatorActions[this.operator](this.prev, this.cur);
        console.log("사칙 연산 결과값", this.prev);
        // 등호면 연산 결과 노출
        if (n === '=') { // 결과 노출
          this.output = this.prev;
          this.operator = null;
          this.cur = this.prev;
        } else { // 새로운 연산을 위한 로직.
          this.output = null;
          this.operator = n;
          this.cur = null;
        }
      } else {
        this.output = null;
        this.operator = n;
        this.prev = this.cur;
        this.cur = null;
      }
    },
    userInput(n) {
      // 사용자가 입력한 숫자(실제로는 문자열) 저장.
      this.cur = this.cur === null ? n : (this.cur += n);
      // 입력한 값이 출력칸에 표시되도록 output 데이터에 저장.
      this.output = this.cur;
    },
    operation(e) { // 연산 로직 분리
      // 클릭한 버튼 값 가져오기
      const n = e.currentTarget.value;

      if (n === 'C') {
        this.clear(); // 초기화 함수 호출
      } else if (['+', '-', '*', '/', '=', '∧', '√', 'log'].includes(n)) {
        this.calculation(n); // 연산 흐름 제어 함수 호출
      } else {
        this.userInput(n); // 사용자가 입력한 숫자 저장 함수 호출
      }
      // console.log("this.output", this.output);
      // console.log("this.operator", this.operator);
      // console.log("this.prev", this.prev);
      // console.log("this.cur", this.cur);
    },
    darkmode(e) { // 1. 다크모드
      document.documentElement.setAttribute('color-calculator', 'dark');
    },
    onKeyupHandler(e) { // 2. 키보드 입력 지원
      // 클릭한 버튼 값 가져오기
      const n = e.currentTarget.value;
      console.log('keyup event!: ', n);

      if (n === 'C') {
        this.clear(); // 초기화 함수 호출
      } else if (['+', '-', '*', '/', '=', '∧', '√', 'log'].includes(n)) {
        this.calculation(n); // 연산 흐름 제어 함수 호출
      } else {
        this.userInput(n); // 사용자가 입력한 숫자 저장 함수 호출
      }
    }
  },
}
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" @keyup="onKeyupHandler" />
      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation" />
      <input type="button" value="1" @click="operation" />
      <input type="button" value="2" @click="operation" />
      <input type="button" value="3" @click="operation" />
      <input type="button" class="operator" value="*" @click="operation" />
      <input type="button" value="4" @click="operation" />
      <input type="button" value="5" @click="operation" />
      <input type="button" value="6" @click="operation" />
      <input type="button" class="operator" value="+" @click="operation" />
      <input type="button" value="7" @click="operation" />
      <input type="button" value="8" @click="operation" />
      <input type="button" value="9" @click="operation" />
      <input type="button" class="operator" value="-" @click="operation" />
      <input type="button" class="dot" value="." @click="operation" />
      <input type="button" value="0" @click="operation" />
      <input type="button" class="operator" value="∧" title="지수(제곱)" @click="operation" />
      <input type="button" class="operator" value="√" title="루트(제곱근)" @click="operation" />
      <input type="button" class="darkmode" value="Dark Mode" @click="darkmode"/>
      <input type="button" class="operator" value="log" title="로그" @click="operation" />
      <input type="button" class="operator result" value="=" @click="operation" />
    </form>
  </div>
</template>

<style>
@import "@/assets/main.css";
</style>