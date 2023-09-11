import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { projects } from "./parts/projects";
import { experiences } from "./parts/experiences";
import { skills } from "./parts/skills";


export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    fullName: "Khalid Graine",
    position: 'full-stack web developer',
    description: 'I enjoy the process of turning concepts into code, starting from scratch and taking them all the way through deployment until they exist in the real world.',
    githubUrl: 'https://github.com/Khalid-Graine',
    linkedinUrl: 'https://linkedin.com/in/khalid-graine',
    linkMail: 'khalidgraine1@gmail.com',
    skills: skills,
    projects:projects,
    experiences: experiences,

  }
  ),
  actions: {
    getFirstProjects() {
      return this.projects.slice(0, 3);
    }
  }
});

