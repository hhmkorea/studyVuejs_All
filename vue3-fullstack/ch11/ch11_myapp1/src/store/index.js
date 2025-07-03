import {reactive} from "vue";
import axios from "axios";

const state = reactive({
    tasks: [],
    loading: false,
    error: null,
});

const actions = {
    async fetchTasks() {
        state.loading = true;
        try { // 요청 URL은 더미 데이터 사이트에서 제공된 것.
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            state.tasks = response.data;
        } catch (e) {
            state.error = e;
        } finally {
            state.loading = false;
        }
    },
}
export default {
    state,
    actions,
    get tasks(){
        return state.tasks;
    },
    get loading() {
        return state.loading;
    },
    get error(){
        return state.error;
    }
}