<template>
    <div>yesssssssssss</div>
    <div class="font-Poppins flex flex-col overflow-hidden text-primary">
        <!-- part 1 -->
        <div class="pt-10 lg:w-6/12 lg:h-screen lg:py-20 lg:fixed top-0 left-0 padding bg-main">
            <homePart :currentPart="currentPart" :info="InfoStore" @valueEmitted="handleValueFromChild"></homePart>
        </div>

        <!-- part 2 -->
        <main class="lg:w-6/12 lg:absolute top-0 right-0 padding flex flex-col gap-20 bg-main">
            <!-- ab -->
            <div class="about pt-20">
                <section-title>About Me</section-title>
                <aboutPart :text="InfoStore.aboutMe" />
            </div>

            <!-- skills -->
            <div class="skills pt-10 lg:pt-20">
                <section-title>Skills</section-title>
                <skillsPart />
            </div>

            <!-- ex -->
            <div class="experience pt-10 lg:pt-20">
                <section-title>Experience</section-title>
                <experiencePart :experiences="InfoStore.experiences" />
            </div>

            <!-- projects -->
            <div class="projects pt-10 lg:pt-20">
                <section-title>Projects</section-title>
                <ProjectCard :projects="InfoStore.projects"></ProjectCard>
                <router-link to="/allprojects">all projects</router-link>
            </div>

        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import { useInfoStore } from "../stores/info";
import experiencePart from "../components/experiencePart.vue";
import sectionTitle from "../components/sectionTitle.vue";
import aboutPart from "../components/aboutPart.vue";
import homePart from "../components/homePart.vue";
import Tags from "../components/Tags.vue";
import skillsPart from "../components/skillsPart.vue";
const InfoStore = useInfoStore();

const scrollToProjectsPart = (v) => {
    const projectsPartElement = document.querySelector(`.${v}`);
    if (projectsPartElement) {
        const projectsPartOffsetTop = projectsPartElement.offsetTop;
        window.scrollTo({
            top: projectsPartOffsetTop,
            behavior: "smooth",
        });
    }
};

const receivedValue = ref("");

const handleValueFromChild = (value) => {
    receivedValue.value = value;
    console.log(receivedValue.value);
    scrollToProjectsPart(value);
};

const currentScrollPosition = ref(0);
const currentPart = ref("about");

const handleScroll = () => {
    currentScrollPosition.value = window.scrollY;
    const about = document.querySelector(".about").offsetTop;
    const skills = document.querySelector(".skills").offsetTop;
    const projects = document.querySelector(".projects").offsetTop;
    const experience = document.querySelector(".experience").offsetTop;

    if (currentScrollPosition.value > about - 50) {
        currentPart.value = "about";
    }
    if (currentScrollPosition.value > skills - 50) {
        currentPart.value = "skills";
    }
    if (currentScrollPosition.value > experience - 50) {
        currentPart.value = "experience";
    }
    if (currentScrollPosition.value > projects - 50) {
        currentPart.value = "projects";
    }
    console.log(currentPart.value);
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
