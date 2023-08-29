<template>
  <div class="flex flex-col gap-10">
    <div
      v-for="ex in experiences"
      :key="ex"
      class="p-1 w-full flex flex-col gap-1  hovereffect"
    >
    
      <div class="flex flex-col gap-1">
        <p class="text-primary font-bold">{{ ex.title }}</p>
        <p class="font-semibold text-sm  text-date ">{{ ex.date }}</p>
        <ul  class="text-secondary my-2">
          <li v-for="task in ex.mytasks" :key="task" 
          class="flex gap-2 my-1">
            <i class="fa-solid fa-check mt-1 text-lienPrimary">

            </i>
           <p> {{ task }}</p>
        </li>
        </ul>
        <tags :tags="ex.tech" />
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
  text: {
    type: String,
  },
});
</script>
