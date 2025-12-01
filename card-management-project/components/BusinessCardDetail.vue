<template>
    <div id="container">
        <h3>이름: {{ businessCard.name }}</h3>
        <div>직함: {{ businessCard.title }}</div>
        <button @click="delteteCardFunc">명함 삭제</button>
    </div>
</template>

<script setup>

const props = defineProps({
    businessCard: Object,
})

const emit = defineEmits(['deleteCardEvent']);

const delteteCardFunc = function() {
    emit('deleteCardEvent', props.businessCard);
}

</script>

<style scoped>
#container{
    width: 500px;
    background-color: #f9f9f9;
    border: 1px solid #d0d0d0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>