<template>
  <div class="flex flex-col gap-10 lg:gap-16">
    <!-- my name - position - description -->
    <div>
      <p class="text-[60px] font-bold text-primary">
        {{ info.fullName }}
      </p>
      <p class="text-lg font-semibold">
        {{ info.position }}
      </p>
      <p class=" text-secondary">
        {{ info.description }}
      </p>
    </div>

    <!-- sections links -->
    <div>
      <div v-for="item in sections" :key="item">
        <div
          @click="scrollTo(item)"
          class="cursor-pointer flex items-center gap-2 "
        >
          <div
            class="h-[1px] bg-primary transition-all ease-in-out duration-300  "
            :class="[currentSection == item ? 'activee' : 'w-8']"
          ></div>
          <p
            class="uppercase"
            :class="[currentSection == item ? 'font-bold ' : '']"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>

    <!-- links -->
    <div class="flex gap-2">
      <a :href="info.githubUrl" title="github">
        <i class="fa-brands fa-github icon "></i>
      </a>
      <a :href="info.linkedinUrl" title="linkedin">
        <i class="fa-brands fa-linkedin icon"></i>
      </a>
      <a :href="`mailto:${info.linkMail}`"  title="gmail">
        <i class="fa-solid fa-at icon"></i>
      </a>
      
      
    </div>
    
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";

defineProps({
  info: {
    type: Object,
  },
  currentSection: {
    type: String,
  },
});
const sections = ref(["about", "skills", "experience", "projects"]);

const emit = defineEmits();

const scrollTo = (section) => {
  emit("clickedSection", section);
};
</script>
