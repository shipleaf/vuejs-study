<template>
    <div>
    <fieldset>
      <legend>
        MyComponent
      </legend>
      <my-component-item />
      <my-component-item />
      <my-component-item />
    </fieldset>
    </div>
</template>

<script setup>
import { inject } from "vue";
import MyComponentItem from './MyComponentItem.vue';

const globalInject = inject("globalProp")
const age = inject("age");
console.log("mycomponent: ", globalInject, age);

</script>

<style lang="scss" scoped>
div{
    color: green;
}
</style>