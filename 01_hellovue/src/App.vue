<template>
  <div>
    {{ message }}
    <button v-on:click="increment" ref="btn">{{count}}</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const message = ref('Hello vue!');
console.log(message);
console.log(message.value);
const count = ref(0);
const increment = () => {
  count.value++;
};

const btn = ref(null);

onMounted(() => {
  console.log(btn.value);
})
</script>

<style scoped>
  button{
    color: red;
  }
</style>

