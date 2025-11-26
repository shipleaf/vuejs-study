<template>
  <div>
    <ul>
      <li>최 상위 객체가 아니면 unwarp 불가: {{ object.id + 1 }}</li>
      <li>구조 분해 할당 결과: {{ id }}</li>
      <li>최종 평가 값의 경우는 unwarp {{ object.id }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
const object = { id: ref(10) }

// 구조 분해 할당 결과 - 여전히 RefImpl
const { id } = object
console.log(id)
</script>

<style lang="scss" scoped></style>
