<template>
  <div>
    <fieldset>
      <legend>
        <legend>App</legend>
        <my-component />
        <hr />
        <prop-parent />
      </legend>
    </fieldset>
  </div>
</template>

<script setup>
import MyComponent from './components/MyComponent.vue';
import propParent from './components/propParent.vue';
</script>

<style lang="scss" scoped>

</style>