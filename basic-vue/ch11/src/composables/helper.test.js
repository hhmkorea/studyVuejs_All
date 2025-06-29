import {describe, test, expect} from "vitest";
import {getImage, dayTokor} from "@/composables/helper.js";

describe('Helper Functions', () => {
   test('getImage function returns valid URL', () => {
       const path = 'example';
       const url = getImage(path);
       expect(url).not.toBeUndefined();
       expect(url).not.toBeNull();
       expect(url).toContain('assets/images/icon');
       expect(url).toContain('example.png');
   });
   test('dayTokor returns correct day array', () => {
       const expected = [
           '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일',
       ];
       expect(dayTokor.length).toBe(7); // dayTokor 배열의 요소가 7개인가?
       dayTokor.forEach((day) => {
           expect(typeof day).toBe('string'); // dayTokor 배열에 문자열이 아닌 다른 형태의 값이 있는지 확인
       });
       expect(dayTokor).toEqual(expected); // dayTokor 배열의 문자열이 순서대로 나열되어 있는지 확인
   });
});