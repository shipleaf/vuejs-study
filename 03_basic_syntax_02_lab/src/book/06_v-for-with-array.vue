<template>
  <div>
    <h1>원본 데이터를 수정하지 않고 필터링/정렬 결과를 표시하는 방법</h1>
    <!-- 1. computed -->
    <ul>
      <li v-for="number in evenNumbers">
        {{ number }}
      </li>
    </ul>

    <hr>

    <!-- 2. method (computed가 불가능한 중첩된 v-for) -->
    <ul v-for="numbers in numberSets">
      <li v-for="num in evenNumberSets(numbers)">
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const numbers = ref([1, 2, 3, 4, 5])
const numberSets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

const evenNumbers = computed(() => {
  return numbers.value.filter((number) => number % 2 === 0)
})

const evenNumberSets = function (numbers) {
  return numbers.filter((number) => number % 2 === 0)
}

// 참고: 억지로 computed로 만들 수는 있지만 caching 효과가 없어서 의미가 없음
const evenNumbersComputed = computed(() => (numbers) => numbers.filter(n => n % 2 == 0));
</script>

<style lang="scss" scoped></style>
