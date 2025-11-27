<template>
  <div>
    <h1>v-if vs v-show</h1>
    <div>
      <span>사용자의 나이는 <input type="number" v-model="age" /></span><br />
      <!-- TODO: 02-1. 나이가 0 미만으로 떨어지면 오류 아이콘을 v-if와 v-show를 이용해서 출력하세요. -->
      <!-- network 탭에서 아이콘들의 로딩 상태를 확인하시오. -->
      <img :src="errimg.img1" v-if="age<0" alt="" />
      <img :src="errimg.img2" v-show="age<0" alt="" />
      <!-- END-->
      <br />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const errimg = {
  img1: 'https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-2/24/bxs-message-rounded-error-512.png',
  img2: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png',
}
const age = ref(0)
</script>

<style scoped>
img {
  width: 20px;
}
</style>
