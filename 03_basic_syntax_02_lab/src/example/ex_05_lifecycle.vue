<template>
  <div>
    <button @click="getCatImage">냥냥펀치</button>
    <hr />
    <img :src="catImageUrl" ref="img" title="고양이그림" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, useTemplateRef } from 'vue'

const catImageUrl = ref('');
const img = useTemplateRef("img");


const getCatImage = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search")
  const json = await response.json()
  catImageUrl.value = json[0].url // 반응형 상태 변경
  console.log("image 조회 완료")
}
// setup에서 실행
getCatImage()

// TODO: 05-1. setup 영역, onMounted, onUpdated에서 img와 img.value를 출력해보세요.
console.log('setup 영역', img, img.value);
onMounted(() => {
  console.log('onmounted 영역', img, img.value);
})

onUpdated(() => {
  console.log('onupdated 영역', img, img.value);
})
// END
</script>

<style lang="scss" scoped>
img {
  width: 50%;
}
</style>
