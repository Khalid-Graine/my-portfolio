<template>
    <div class="flex flex-wrap gap-2 ">
        <div v-for="tag in tags" :key="tag">
        <p class="px-4 py-1 rounded-full bg-purple-100  text-tagText bg-tagBackground text-sm ">{{ tag }}</p>
        </div>
    </div>
</template>


<script setup>
defineProps({
    tags: {
        type: Array
    }
})
</script>