<template>
    <p class="text-secondary">
  {{ text }}
    </p>
</template>

<script setup>
defineProps({
    text: {
        type: String
    }
})
</script>