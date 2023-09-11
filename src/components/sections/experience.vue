<template>
  <div class="flex flex-col gap-10">
    <div
      v-for="experience in experiences"
      :key="experience"
      class="p-1 w-full flex flex-col gap-1  hovereffect"
    >
    
      <div class="flex flex-col gap-1">
        <p class="text-primary font-bold">{{ experience.title }}</p>
        <p class="font-semibold text-sm  text-date ">{{ experience.date }}</p>
        <ul  class="text-secondary my-2">
          <li v-for="task in experience.mytasks" :key="task" 
          class="flex gap-2 my-1">
            <i class="fa-solid fa-check mt-1 text-lienPrimary">

            </i>
           <p> {{ task }}</p>
        </li>
        </ul>
        <tags :tags="experience.tech" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Tags from "../Tags.vue";
defineProps({
  experiences: {
    type: Object,
  },
  
});
</script>
