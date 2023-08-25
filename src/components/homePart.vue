<template>
  <div class="flex flex-col gap-10 lg:gap-16 ">

    <div>
      <p class="text-6xl font-bold">
        {{ info.fullName }}
      </p>
      <p class="text-lg font-semibold">
        {{ info.position }}
      </p>
      <p>
        {{ info.description }}
      </p>
    </div>

    <div>
      <div v-for="item in sections" :key="item">
        <div @click="emitValue(item)" class="cursor-pointer flex items-center gap-2 ">
          <div class="h-[1px]  bg-primary transition-all ease-in-out duration-300"
            :class="[currentPart == item ? 'activee' : 'w-8']">
          </div>
          <p class="uppercase" :class="[currentPart == item ? 'font-bold ' : '']">{{ item }}</p>
        </div>
      </div>
    </div>

    <div>
      <a :href="info.githubUrl">
        <i class="fa-brands fa-github icon mr-3"></i>
      </a>
      <a :href="info.linkedinUrl">
        <i class="fa-brands fa-linkedin icon"></i>
      </a>
    </div>

  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
defineProps({
  info: {
    type: Object
  },
  currentPart: {
    type: String,
  }
})
const sections = ref(['about', 'skills', 'experience', 'projects']);
const emit = defineEmits();

const emitValue = (v) => {
  emit('valueEmitted', v);
};
</script>