<template>
    <div>
        <fieldset>
            <legend>prop parent item</legend>
            {{ user }}
        </fieldset>
    </div>
</template>

<script setup>
    defineProps({
        user: Object,
    })
</script>

<style lang="scss" scoped>

</style>