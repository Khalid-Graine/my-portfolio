<template>
    <div class="app-container font-Poppins flex flex-col overflow-hidden text-primary">
  
      <!-- Left Part: Home Section -->
      <div class="home-section pt-10 lg:w-6/12 lg:h-screen lg:py-20 lg:fixed top-0 left-0 padding bg-main">
        <home :currentSection="currentSection" :info="InfoStore" @clickedSection="scrollToSection" />
      </div>
  
      <!-- Right Part: About, Skills, Experience, Projects -->
      <div class="content-section lg:w-6/12 lg:absolute top-0 right-0 padding flex flex-col gap-20 bg-main">
        
        <!-- About Me -->
        <div class="about-section pt-20">
          <theTitle>About Me</theTitle>
          <about :text="InfoStore.aboutMe" />
        </div>
  
        <!-- Skills -->
        <div class="skills-section pt-10 lg:pt-20">
          <theTitle>Skills</theTitle>
          <skills :skills="InfoStore.skills" />
        </div>
  
        <!-- Experience -->
        <div class="experience-section pt-10 lg:pt-20">
          <theTitle>Experience</theTitle>
          <experience :experiences="InfoStore.experiences" />
        </div>
  
        <!-- Projects -->
        <div class="projects-section pt-10 lg:pt-20">
          <theTitle>Projects</theTitle>
          <Projects :projects="InfoStore.getFirstProjects()" />
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { useInfoStore } from "../stores/informations";
  import home from "../components/sections/home.vue";
  import About from "../components/sections/about.vue";
  import skills from "../components/sections/skills.vue";
  import experience from "../components/sections/experience.vue";
  import Projects from "../components/sections/project.vue";
  import theTitle from "../components/theTitle.vue";
 
  
  const InfoStore = useInfoStore();
  const currentScrollPosition = ref(0);
  const currentSection = ref("about");
  
  const scrollToSection = (targetSection) => {
    const sectionElement = document.querySelector(`.${targetSection}-section`);
    if (sectionElement) {
      const sectionOffsetTop = sectionElement.offsetTop;
      window.scrollTo({
        top: sectionOffsetTop,
        behavior: "smooth",
      });
    }
  };
  
  const updateCurrentSection = () => {
    const sections = ["about", "skills", "experience", "projects"];
    const offsetThreshold = 50;
    
    for (const section of sections) {
      const sectionElement = document.querySelector(`.${section}-section`);
      const sectionOffsetTop = sectionElement.offsetTop;
      
      if (currentScrollPosition.value > sectionOffsetTop - offsetThreshold) {
        currentSection.value = section;
      }
    }
  };
  
  const handleScroll = () => {
    currentScrollPosition.value = window.scrollY;
    updateCurrentSection();
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  