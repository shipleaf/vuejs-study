<template>
  <div>
    <h2>사용자 정보</h2>
    <ul>
      <li>name: {{ user.name }}</li>
      <li>age: {{ user.age }}</li>
      <!-- TODO: 01-3. 투표 가능 여부와 연봉을 computed로 처리해보자.-->
       <li>can vote?({{canVote}})</li>
       <li>연봉은? ({{prettyNum}})</li>
       <li>{{ arr }}</li>
       <li>{{ reversed }}</li>
    </ul>
    <button @click="user.age++">+</button>
    <button @click="user.age--">-</button>
    <button @click="arr.push(2)">push</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const reversed = computed(() => {
  // return [...arr.value].reverse(); // d
  return arr.value.reverse(); // 
})

const arr = ref([1]);

const user = ref({
  name: 'hong gil dong',
  age: 16,
  salary: 100000000,
})

// TODO: 01-1. user의 age가 18세 이상인지를 판단하여 yes/no로 반환하는 canVote를 computed로 만들어보자.
//  콘솔에 canVote의 값을 출력해보고, 값을 증가시켜 보자.
const canVote = computed(() => {
  return user.value.age >= 18 ? 'yes' : 'no';
})
// END

// TODO: 01-2. user의 salary를 1000단위 구분자와 함께 출력하도록 computed를 구성하고 사용해보자.
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
const prettyNum = computed(() => {
  return new Intl.NumberFormat().format(user.value.salary);
})
// END
</script>

<style lang="scss" scoped></style>
