<template>
    <div>
        <form @submit.prevent="createCardFunc">
            <label for="name">이름</label>
            <input v-model="name" type="text" name="" id="name" />
            <label for="title">직함</label>
            <input v-model="title" type="text" name="" id="title" />
            <button type="submit">명함 추가</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref('');
const title = ref('');

const emit = defineEmits(['createCardEvent']);

const createCardFunc = (e) => {
    const cardInfo = {"name": name, "title": title}
    emit('createCardEvent', cardInfo);
}

</script>

<style scoped>

</style>