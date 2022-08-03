<template>
    <li>
        {{ title }}
    </li>
</template>

<script setup>
    defineProps({
        title: String
    })
</script>