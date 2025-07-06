import HomeComp from "@/components/HomeComp.vue";
import {createRouter, createWebHistory} from "vue-router";
import BoardList from "@/components/board/BoardList.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import BoardInsert from "@/components/board/BoardInsert.vue";
import BoardEdit from "@/components/board/BoardEdit.vue";
import QnAList from "@/components/qna/QnAList.vue";
import DataRoomList from "@/components/dataroom/DataRoomList.vue";
import DataRoomDetail from "@/components/dataroom/DataRoomDetail.vue";
import QnADetail from "@/components/qna/QnADetail.vue";
import AnswerInsert from "@/components/qna/AnswerInsert.vue";
import QnAInsert from "@/components/qna/QnAInsert.vue";
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";
import QnAEdit from "@/components/qna/QnAEdit.vue";
import ProductEdit from "@/components/product/ProductEdit.vue";
import DataRoomEdit from "@/components/dataroom/DataRoomEdit.vue";
import CreateProduct from "@/components/product/CreateProduct.vue";
import CreateDataRoom from "@/components/dataroom/CreateDataRoom.vue";
import ChatBot from "@/components/chatbot/ChatBot.vue";

const routes = [
    { path: '/', component: HomeComp },
    { path: '/boards', component: BoardList },
    { path: '/boards/list', name: 'BoardList', component: BoardList },
    { path: '/boards/detail/:no', name: 'BoardDetail', component: BoardDetail },
    { path: '/boards/insert', name: 'BoardInsert', component: BoardInsert },
    { path: '/boards/edit/:no', name: 'BoardEdit', component: BoardEdit },
    { path: '/qna', component: QnAList },
    { path: '/qna/list', name: 'QnAList', component: QnAList },
    { path: '/qna/detail/:qno', name: 'QnADetail', component: QnADetail },
    { path: '/qna/insert', name: 'QnAInsert', component: QnAInsert },
    { path: '/qna/edit/:qno', name: 'QnAEdit', component: QnAEdit },
    { path: '/qna/answer/:qno', name: 'AnswerInsert', component: AnswerInsert },
    { path: '/dataroom', component: DataRoomList },
    { path: '/dataroom/list', name: 'DataRoomList', component: DataRoomList },
    { path: '/dataroom/:dno', name: 'DataRoomDetail', component: DataRoomDetail },
    { path: '/dataroom/create', name: 'CreateDataRoom', component: CreateDataRoom },
    { path: '/dataroom/edit/:dno', name: 'DataRoomEdit', component: DataRoomEdit },
    { path: '/products', component: ProductList },
    { path: '/products/list', name: 'ProductList', component: ProductList },
    { path: '/products/:pno', name: 'ProductDetail', component: ProductDetail },
    { path: '/products/create', name: 'CreateProduct', component: CreateProduct },
    { path: '/products/edit/:pno', name: 'ProductEdit', component: ProductEdit },
    { path: '/chatbot', component: ChatBot }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;