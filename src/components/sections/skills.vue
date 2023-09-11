<template>
  <div>
    <div class="mb-1 text-secondary">
      Here you can see my skills, one of the fascinations of the computer world
      is the momentary changes of technologies, but I try to update my knowledge
      every day and experience new technologies.
    </div>

    <p class="text-primary font-semibold mt-3">front end:</p>
    <tags :tags="skills.frontend" />

    <p class="text-primary font-semibold mt-3">back end:</p>
    <tags :tags="skills.backend" />

    <p class="text-primary font-semibold mt-3">tools:</p>
    <tags :tags="skills.tools" />
  </div>
</template>
<script setup>
import { skills } from "../../stores/parts/skills";
import Tags from "../Tags.vue";

defineProps({
  skills: {
    type: Object,
  },
});
</script>
