import store from "../store/index.js";

export default class MoviePresenter {

    constructor(view) {
        this.view = view;
    }

    async loadMovies() {
        try {
            await store.actions.fetchMovies();
            this.view.displayMovies(state.movies);
        } catch (e) {
            this.view.displayError(e);
        }
    }

    async loadMovieDetail(movieId) {
        try {
            const movie = store.getMovieById(movieId);
            if (movie) {
                this.view.displayMovieDetail(movie);
            } else {
                throw new Error('Movie not found');
            }
        } catch (e) {
            this.view.displayError(e);
        }
    }

    addReview(movieId, review) {
        try {
            store.addReview(movieId, review);
            this.view.displaySuccess('리뷰가 성공적으로 추가되었습니다.');
        } catch (error) {
            this.view.displayError(error);
        }
    }
}