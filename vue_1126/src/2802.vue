<template>
  <div>
    <h1>다양한 전시 정보</h1>
    <hr>
    <ul>
      <li :id="enTitle" :class="{'is-selected': isActive}">
        <label for="selected">전시 선택</label>
        <input v-model="isActive" type="checkbox" name="selected" id="selected">
        <h3>{{ show.koTitle }}</h3>
        <p v-html="show.description"></p>
        <hr>
        <p>{{ show.artMuseum }}</p>
        <a :href="show.museumURL">전시장 바로가기</a>
        <hr>
            <p>입장권 구매하기</p>
            <div>
            <span :class="{'is-required': peopleCount <= 0}">인원 수 : {{ peopleCount }} 명 </span>
            <button :disabled="peopleCount == 0" @click="decreaseNum">-</button>
            <button :disabled="peopleCount == 10" @click="increaseNum">+</button>
            </div>
            <p>총 입장료 : {{ totalPrice }} 원</p>
            <hr>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const show = ref({
    koTitle: ref('모네 인사이드'),
    enTitle: ref('monet-inside'),
    artMuseum: ref('예술의 전당'),
    museumURL: ref('https://www.sac.or.kr/'),
    description: ref('<p><모네 인사이드>는 빛의 화가 <b>클로드 모네</b>가 남긴 소중한 명작들을 현대적 감각으로 재해석해 음악과 함께 감상하는 미디어아트 전시입니다.</p>'),
  });

  const peopleCount = ref(0);
  const totalPrice = ref(0);
  const price = ref(1000);

  const decreaseNum = () => {
    if(peopleCount.value == 0) return;
    peopleCount.value -= 1;
    totalPrice.value = peopleCount.value * price.value;
  }

  const increaseNum = () => {
    if(peopleCount.value >= 10) return;
    console.log(peopleCount)
    peopleCount.value += 1;
        totalPrice.value = peopleCount.value * price.value;
  }

  const isActive = ref(false);
</script>

<style scoped>
.is-selected{
  background-color: #eee;
}

.is-required{
  color: red;
}
</style>