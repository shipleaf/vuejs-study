<template>
  <div>
    <!-- Maintaining State with key -->
    <div v-for="item in items" :key="item.id">
      <!-- content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let id = 0

const items = ref([
  { id: id++, name: 'Alice' },
  { id: id++, name: 'Bella' },
  { id: id++, name: 'Hong' },
])
</script>

<style lang="scss" scoped></style>
