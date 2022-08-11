<script setup lang="ts">

const emit = defineEmits<{
    (event: 'add-count', num:number):void;
    (event: 'reset-count'): void;
}>()

</script>

<template>
<button type="button" @click="emit('add-count', 3)">add </button>
<button type="button" @click="emit('reset-count')">reset </button>
</template>