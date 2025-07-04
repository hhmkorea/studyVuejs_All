import {reactive} from "vue";
import axios from "axios";

const dummyReviews = { // 더미 리뷰 데이터
    '20120101': [
        {author: '홍길동', content: '정말 재미있는 영화였습니다!'},
        {author: '이영희', content: '스토리가 탄탄하고 배우들의 연기가 뛰어났습니다.!'},
    ],
};

const state = reactive({
    movies: [],
    loading: false,
    error: null,
    reviews: { ...dummyReviews }, // 초기 리뷰 데이터
});

const actions = {
    async fetchMovies() {
        state.loading = true;
        state.error = null;
        try {
            const targetDt = getTodayDate(); // '20250701'; // 전일 데이터 로딩이 힘들경우 임시 값 적용.
            console.log(targetDt);
            const apiKey = '2593815e038e0527e151e5d398c6273a'; // API Key는 별도로 발급받아 넣기
            const response = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
                {
                    params: {
                        key: apiKey,
                        targetDt: targetDt,
                    }
                });
            console.log('Movies fetched : ', response.data);
            state.movies = response.data.boxOfficeResult.dailyBoxOfficeList;
        } catch (e) {
            state.error = e;
        } finally {
            state.loading = false;
        }
    },
    addReview(movieId, review) {
        if (!state.reviews[movieId]) {
            state.reviews[movieId] = [];
        }
        state.reviews[movieId].push(review);
    }
}

const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate() - 1).padStart(2, '0'); // 전일 데이타 로딩
    return `${year}${month}${day}`;
}

export default {
    state,
    actions,
    get movies () {
        return state.movies;
    },
    get loading () {
        return state.loading;
    },
    get error () {
        return state.error;
    },
    getMovieById(id) {
        return state.movies.find(movie => movie.movieCd === id);
    },
    getReviewsByMovieId(id) {
        return state.movies[id] || [];
    }
}