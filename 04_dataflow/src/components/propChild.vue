<template>
    <div>
        <fieldset>
            <legend>prop Child</legend>
            <ul>
                <li>{{ myMsg }}</li>
                <li>{{ dynamicProps }}</li>
                <button @click="handleClick">click me</button>
                <button @click="sendArgs">args</button>
            </ul>
        </fieldset>
        
    </div>
</template>

<script setup>
import { ref, inject } from "vue";
const globalInject = inject("globalProp")
const age = inject("age");
console.log("prop child", globalInject, age);

const props = defineProps({
    myMsg: String,
    dynamicProps: String,
});
const emit = defineEmits(["someEvent", "toParent"]);

const sendArgs = () => {
    emit("toParent", 1, 2, 3);
}

console.log(props);
console.log(props.myMsg);

const handleClick = () => {
    emit("someEvent");
}
</script>

<style lang="scss" scoped></style>