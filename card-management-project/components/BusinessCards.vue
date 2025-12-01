<template>
    <div id="countCotainer">
            <h3>보유 명함 목록</h3>
            <span v-if="cardsNumber > 0">현재 보유중인 명함 수: {{ cardsNumber }}</span>
            <span v-else>명함이 없습니다. 새로운 명함을 추가해 주세요.</span>
        </div>
    <div id="container">
        <br/>
        <business-card-detail 
        v-for="card in businessCards" 
        :key="card.name" 
        :business-card="card"
        @delete-card-event="deleteCard"
        />
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import BusinessCardDetail from '../components/BusinessCardDetail.vue';

const props = defineProps({
  newCard: {
    type: Object,
    default: null,
  },
})

watch(() => props.newCard, (card) => businessCards.value.push(card))

const businessCards = ref([
    {"name": "일론 머스크","title": "테슬라 테크노킹"},
    {"name": '래리 엘리슨', "title" : "오라클 창업주"},
    {"name": "빌 게이츠", "title": "마이크로소프트 공동창업주"},
    {"name": '래리 페이지', "title": '구글 공동창업주'},
    {"name": '세르게이 브린', "title": '구글 공동창업주'},
]);

function deleteCard(card) {
    console.log("컴인")
  businessCards.value = businessCards.value.filter(
    c => c !== card
  );
}

const cardsNumber = computed(() =>{
   return businessCards.value.length;
})

</script>

<style scoped>
#container{
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-self: center;
}
#countCotainer{
    text-align: center;
}
</style>