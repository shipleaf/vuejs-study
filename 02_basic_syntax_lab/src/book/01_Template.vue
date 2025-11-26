<template>
  <!-- template syntax -->
  <p>Message: {{ msg }}</p>
  <p v-text="'Message: ' + msg"></p>
  <div v-html="rawHtml"></div>
  <div v-bind:id="dynamicId"></div>

  <ul>
    <li>{{ number + 1 }}</li>
    <li>{{ ok ? 'YES' : 'NO' }}</li>
    <li> {{ msg.split('').reverse().join('') }}</li>
  </ul>

  <div v-bind:id="`list-${id}`"></div>

</template>
<script setup>
import { ref } from 'vue';
const msg = 'Hello'; // static 값 - 반응성 x
const rawHtml = ref('<span style="color:red">This should be red.</span>');
const dynamicId = ref('my-id');
const number = ref(1);
const ok = ref(true);
const id = ref(100);
</script>

<style scoped></style>
