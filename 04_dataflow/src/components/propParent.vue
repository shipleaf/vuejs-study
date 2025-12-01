<template>
    <div>
        <fieldset>
            <legend>prop Parent</legend>
            <prop-child my-msg="hello" :dynamic-props="name" @some-event="handleSomeEvent" @to-parent="fromChild"/>
            <prop-parent-item v-for="item in data" :key="item.id" :user="item" />
        </fieldset>
    </div>
</template>

<script setup>
import propChild from './propChild.vue';
import PropParentItem from './PropParentItem.vue';
import { ref, provide } from "vue";
const name = ref("hong");

provide("age", ref(10));

const data = ref([
    {id: "hong", age:10},
    {id: "jang", age:20},
    {id: "kim", age:30},
])

const handleSomeEvent = () => {
    console.log("뭔일 있어???");
};

const fromChild = (...args) => {
    console.log("자식으로 부터: ", args);
}
</script>

<style lang="scss" scoped>

</style>