<template>
  <div>
    <h1>다양한 전시 정보</h1>
    <div>
      <!-- selectedInfos의 길이를 이용해서 어떤 것을 출력할 지 결정
      v-show는 항상 렌더링, v-if는 조건이 충족할 때만 렌더링, 뭐가 더 효율적인지 고민하고 사용 
      -->
      <h3 v-show="selectedInfos.length >= 1">관람 예정인 전시 : {{ selectedInfos.join(', ') }}</h3>
      <h3 v-show="selectedInfos.length == 0">관람 예정인 전시 : 관람 예정인 전시가 없습니다.</h3>
      <p>예상 총 금액 : {{ totalPrice }}</p>
      <h3 v-show="selectedInfos.length == 0">관람 예정인 전시가 없습니다.</h3>
    </div>
    <label for="isActive">전시 중인 정보만 보기</label>
    <!-- isActive ref 변수와 연결 -->
    <input v-model="isActive" type="checkbox" id="isActive">
    <ul>
      <!--  -->
      <li v-for="exhibition in isActiveExhibition" :key="exhibition.title" 
      :class="[aboutPrice(exhibition.price), { selected: exhibition.isSelected }]">
        <div v-if="exhibition.isShow === '전시 중'">
          <label for="isSelected">전시 관람 하기</label>
          <input v-model="exhibition.isSelected" @change="handleCheck(exhibition)" type="checkbox" id="isSelected">
        </div> 
        <div v-if="exhibition.isShow === '전시 종료'" style="color: red;">
          <p>전시가 종료되어 관람 할 수 없습니다.</p>
        </div>
        <h3>{{ exhibition.title }}</h3>
        <hr>
        <p>{{ exhibition.place }}</p>
        <p>가격 : {{ formatPrice(exhibition.price) }}</p>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed, ref, watch } from "vue";

  const exhibitions = ref([
    {
      title: "무라카미 다카시 : 무라카시좀비",
      place: "부산 시립 미술관",
      price: 1000,
      isShow: "전시 중",
      isSelected : false,
    },
    {
      title: "마우라치오 카텔란 개인전",
      place: "리움 미술관",
      price: 30000,
      isShow: "전시 중",
      isSelected : false,
    },
    {
      title: "조선백자전",
      place: "리움 미술관",
      price: 30000,
      isShow: "전시 중",
      isSelected : false,
    },
    {
      title: "한국 실험미술 1960 - 1970",
      place: "국립현대미술관",
      price: 0,
      isShow: "전시 중",
      isSelected : false,
    },
    {
      title: "에드워드 호퍼 : 길 위에서",
      place: "서울 시립 미술관",
      price: 1000,
      isShow: "전시 종료",
      isSelected : false,
    },
    {
      title: "알렉산더 칼더 x 이우환",
      place: "국제갤러리 서울점",
      price: 15000,
      isShow: "전시 종료",
      isSelected : false,
    },
  ])

  const isActive = ref(false);
  const totalPrice = ref(0);
  const selectedInfos = ref([]);

  watch(exhibitions, () => {
    const filteredInfos = exhibitions.value.filter((ex) => ex.isSelected)

    selectedInfos.value = filteredInfos.map((ex) => ex.title)

    totalPrice.value = filteredInfos.reduce((sum, ex) => sum + ex.price, 0)
  },
  {
    deep: true,
  }
)

  const isActiveExhibition = computed(() => {
    return isActive.value ? 
    exhibitions.value.filter((ex) => ex.isShow === "전시 중") : 
    exhibitions.value;
  })

  const aboutPrice = function(price){
    if(price <= 5000) return "cheap";
    if(price >= 20000) return "expensive";
    return "";
  }

  const formatPrice = (price) => {
    if(price === 0) return "무료 전시입니다.";
    return price;
  }

  
</script>

<style scoped>
li {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 0;
  background-color: #f5f5f5;
}
.cheap {
  background-color: #e1f7e1;
}
.expensive {
  background-color: #f7e1e1;
}
.selected {
  background-color: #ffc;
}
</style>