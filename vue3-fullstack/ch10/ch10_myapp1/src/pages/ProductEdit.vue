<template>
  <div class="grid-container">
    <h2>상품 정보 수정</h2>
    <form @submit.prevent="submitEdit">
      <div class="gird-x grid-padding-x">
        <div class="medium-6 cell">
          <label>상품명
            <input type="text" v-model="editableProduct.pname" required>
          </label>
        </div>
        <div class="medium-6 cell">
          <label>상품내용
            <textarea v-model="editableProduct.pcontent" required></textarea>
          </label>
        </div>
        <div class="medium-4 cell" v-for="(img, index) in editableProduct.images" :key="index">
          <label>상품이미지 {{ index + 1 }}
            <input type="file" @change="handleFileChange(index)" accept="image/*" />
            <img :src="img" alt="현재 이미지" style="width: 100%; margin-top: 0.5rem;"/>
          </label>
        </div>
<!--        <div>-->
<!--          <img src="http://localhost:8081/uploads/img1a.jpg"  alt="" style="width: 100%; margin-top: 0.5rem;" />-->
<!--          <img src="http://localhost:8081/uploads/img1b.jpg"  alt="" style="width: 100%; margin-top: 0.5rem;" />-->
<!--          <img src="http://localhost:8081/uploads/img1c.jpg"  alt="" style="width: 100%; margin-top: 0.5rem;" />-->
<!--        </div>-->
        <div class="medium-6 cell">
          <p><strong>등록일시:</strong>{{ formatDate(editableProduct.resdate) }}</p>
        </div>
        <div class="medium-6 cell">
          <p><strong>조회수:</strong>{{ editableProduct.hits }}</p>
        </div>
      </div>
      <button type="submit" class="button">[상품 정보 수정]</button>
      <button type="button" class="button" @click="goToList">[상품목록]</button>
    </form>
  </div>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const pno = route.params.pno;
const editableProduct = ref({
  pno: '',
  cate: '',
  pname: '',
  pcontent: '',
  images: [],
  resdate: '',
  hits: 0,
  imgFiles: [],
});

const fetchProduct = async () => {
  await store.dispatch('fetchProductDetail', pno);
  const current = store.state.currentProduct;
  editableProduct.value = {
    pno: current.pno,
    cate: current.cate,
    pname: current.pname,
    pcontent: current.pcontent,
    images: [current.img1, current.img2, current.img3],
    resdate: current.resdate,
    hits: current.hits,
    imgFiles: [null, null, null],
  };
  console.log(editableProduct.value);
};

const handleFileChange = (index) => (event) => {
  const file = event.target.files[0];
  if (file) {
    editableProduct.value.imgFiles[index] = file; // 인덱스 조정
    const reader = new FileReader();
    reader.onload = (e) => {
      editableProduct.value.images[index] = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitEdit = async () => {
  const formData = new FormData();

  formData.append('cate', editableProduct.value.cate);
  formData.append('pname', editableProduct.value.pname);
  formData.append('pcontent', editableProduct.value.pcontent);
  editableProduct.value.imgFiles.forEach((file, index) => {
    if (file) {
      formData.append(`img${index + 1}`, file);
    }
  });
  await store.dispatch('updateProduct', { pno, formData });
  router.push({name: 'ProductList'});
};

const goToList = () => {
  router.push({name: 'ProductList'});
};

const formatDate = (datestr) => {
  const date = new Date(datestr);
  return date.toLocaleString();
};

onMounted(() => {
  fetchProduct();
});
</script>