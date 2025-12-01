<script setup>
import { ref } from "vue";
import BusinessCards from '../components/BusinessCards.vue';
import CreateCardForm from '../components/CreateCardForm.vue';
const newCard = ref(null)
const updateCard = (cardInfo) => {
  newCard.value = cardInfo
}

</script>

<template>
   <div class="layout">
    <header>명함 관리 페이지</header> 
    <main>
      <article>
        명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.
        <CreateCardForm @create-card-event="updateCard"/>
        <BusinessCards :new-card="newCard"/>
      </article>
    </main>
    <footer>ⓒ 2023 My Business Cards</footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  width: 300px;
  background-color: #0077cc;
  color: white;
  text-align: center;
  padding: 30px 0;
  margin: 0 auto;
}

header h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
}

main {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

article {
  font-size: 18px;
  color: #333;
}

footer {
  text-align: center;
  padding: 20px 0;
  background-color: #f2f2f2;
  color: #555;
  font-size: 14px;
}
</style>
