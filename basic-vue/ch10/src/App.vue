<script setup>
import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get('/api/data');
    console.log(response.data);
  } catch (error){
    console.log('데이터를 가져오던 중 에러 발생:', error)
  }
};

const postData = () => {
  axios
      .post('/api/data', {
        name: 'new data',
        description: 'sample data',
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log('데이터를 추가하던 중 에러 발생:', error));
};

const putData = () => {
  axios
      .put('/api/data/1', {
        name: 'update data',
        description: 'update description(put)',
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log('전체 데이터를 변경하던 중 에러 발생:', error));
};

const patchData = () => {
  axios
      .patch('/api/data/1', {
        description: 'update description(patch)',
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log('일부 데이터를 변경하던 중 에러 발생:', error));
};

</script>

<template>
  <div>
    <button @click="postData">POST</button>
    <button @click="getData">GET</button>
    <button @click="putData">PUT</button>
    <button @click="patchData">PATCH</button>
  </div>
</template>

<style scoped>

</style>
