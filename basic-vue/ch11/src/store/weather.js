import {defineStore} from "pinia"; // 데이터 상태관리
import axios from "axios";
import {computed, ref} from "vue";
import dayjs from "dayjs";

// Axios를 사용해 HTTP 요청을 보내기 위한 Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
    params: {
        lang: 'ko',
        key: 'G5QN238NEFKBYH5KUZAZLEGKX', // 본인의 API key
        unitGroup: 'metric',
    },
});
// ipify API를 기본으로 하는 Axios 인스턴스 생성
const axiosInstance2 = axios.create({
    baseURL: 'https://api64.ipify.org/?format=json',
});
// Free IP API를 기본값으로 하는 Axios 인스턴스 생성
const axiosInstance3 = axios.create({
    baseURL: 'https://freeipapi.com/api/json',
});
export const useWeatherStore = defineStore('weather', () => {
    const address = ref('seoul'); // 초기 검색 지역
    const currentConditions = ref(null); // 현재 날씨 정보 데이터
    const days = ref(null); // 일별 날씨 객체가 담긴 배열
    const searchData = ref([]); // 검색 날씨 데이터

    const hours = computed(() => { // 오늘 시간대별 데이터 계산
        return days.value
            // 날씨 객체 배열에서 오늘 날짜와 일치하는 객체 1개를 찾음
            ?.find((v) => v.datetime === dayjs().format('YYYY-MM-DD'))
            // 현재 시각 이후 시간만 시간별 데이터에 포함
            ?.hours.filter((v) => v.datetime > dayjs().format('HH:mm:ss'));
    });
    const getCurrentWeatherInfo = async () =>  { // 현재 날씨 API 불러오기
      try {
          const res = await axiosInstance.get('/' + address.value);
          currentConditions.value = res.data.currentConditions;
          days.value = res.data.days; // 응답 객체에서 days 속성 담아둠.
          //console.log(days.value);
      }  catch (e) {
          alert(e.response?.data? e.response?.data : e.message);
      }
    };
    const forecast = computed(() => { // 미래 날짜의 날씨 예보 데이터 계산하기
        return days.value?.filter((v) => v.datetime > dayjs().format('YYYY-MM-DD'));
    });
    const getSearchWeatherInfo = async (city) => { // 지역명(city)로 날씨 API 검색
        try {
            const res = await axiosInstance.get('/' + city);
            const printData = { // 응답 데이터 객체로 필요한 데이터 가공
                address: res.data.address, // 지역명
                feelslikemax: res.data.days[0].feelslikemax, // 최고 온도
                feelslikemin: res.data.days[0].feelslikemin, // 최저 온도
                icon: res.data.currentConditions.icon, // 날씨 아이콘
                temp: res.data.currentConditions.temp, // 현재 온도
            };
            if (searchData.value.findIndex((v) => v.address === res.address) === -1) { // 이미 추가한 지역이면 중복으로 추가하지 않기
                searchData.value.push(printData);
            } else {
                alert('이미 조회한 지역입니다.');
            }
        } catch (e) {
            alert(e.response?.data ? e.response?.data : e.message);
        }
    };
    const getCityName = async () => { // 사용자 지역명 구하기
        try {
            const res = await axiosInstance2.get();
            const ip = res.data.ip;
            const res2 = await axiosInstance3.get('/' + ip);
            address.value = res2.data.cityName; // 응답데이타
            console.log(res2);
        } catch (e) {
            alert(e.response?.data ? e.response?.data : e.message);
        }
    };
    return {
        address,
        currentConditions,
        hours,
        forecast,
        searchData,
        getCurrentWeatherInfo,
        getSearchWeatherInfo,
        getCityName,
    }
});