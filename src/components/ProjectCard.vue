<template>

  <div
    v-for="project in projects"
    :key="project.title"
    class="flex flex-col gap-2 mb-10 hovereffect rounded-lg"
  >
    <div
   
    >
      <div class="rounded-t-lg overflow-y-hidden">
        <img :src="project.picture" alt="" />
      </div>
      <div class="p-1">
        <a :href="project.demo ? project.demo : project.github">
          <div
            class="text-lg font-semibold flex items-center gap-3 hover:text-lienecondary"
            
          >
            <p>{{ project.name }}</p>
            <i
              class="fa-solid fa-arrow-right-long activeArrow"
            ></i>
          </div>
        </a>

        <p class="text-secondary">
          {{ project.description }}
        </p>
        <div class="mt-1">
          <tags :tags="project.tech"></tags>
        </div>
        <div class="flex justify-between p-1">
          <div class="flex gap-3">
            <a :href="project.demo">
              <i class="fa-regular fa-eye icon"></i>
            </a>
            <a :href="project.github"
              ><i class="fa-brands fa-github icon"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tags from "./Tags.vue";


defineProps({
  projects: {
    type: Object,
  },
});

</script>




