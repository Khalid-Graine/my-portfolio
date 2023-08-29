<template>

  <div
    v-for="project in projects"
    :key="project.title"
    class="flex flex-col gap-2 mb-10 hovereffect rounded-lg"
  >
    <a :href="project.demo ? project.demo : project.github" target="_blank">
      <div
   
    >
      <div class="rounded-t-lg overflow-y-hidden">
        <img :src="project.picture" alt="" />
      </div>
      <div class="p-1">
        <a :href="project.demo ? project.demo : project.github" target="_blank">
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
            <a v-if="project.demo" :href="project.demo" target="_blank">
              <i class="fa-regular fa-eye icon"></i>
            </a>
            <a v-if="project.github" :href="project.github" target="_blank"
              ><i class="fa-brands fa-github icon"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    </a>
  </div>
  <div class="flex items-center gap-2 pb-6 hover:text-secondary">
    <router-link to="/allprojects">see all projects</router-link>
    <i class="fa-solid fa-arrow-right"></i>
  </div>
</template>

<script setup>
import Tags from "../Tags.vue";


defineProps({
  projects: {
    type: Object,
  },
});

</script>




