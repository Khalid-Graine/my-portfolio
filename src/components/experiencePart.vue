<template>
   <div class="flex flex-col gap-10 ">

    <div  v-for="ex in experiences" :key="ex" class="p-1 w-full  flex flex-col gap-1 lg:gap-8 lg:flex-row hovereffect ">
     <div class="font-semibold w-[600px] text-date">{{ ex.date }}</div>
     <div class="flex flex-col gap-1">
      
            <p class="text-primary font-bold">{{ ex.title }} </p>
        
     <p class="text-secondary"> {{ ex.description }}</p>
     <tags :tags="ex.tech" />
     </div>
    </div>


   </div>
</template>

<script setup>
import Tags from './Tags.vue';
defineProps({
    experiences: {
        type: Object     
    },
    text: {
        type: String
    }
})
</script>