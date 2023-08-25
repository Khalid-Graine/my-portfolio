import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useProjectsStore = defineStore({
  id: 'test',
  state: () => ({
    name: "gooooooood",
    projects: [
      {
        name: "test1",
        description: 'gftf fgftf fhfh fhff ffff fff fff',
        picture: "",
        github: "https://github.com/Khalid-Graine/fibre-landing-page",
        demo: "https://fibre-landing-page.netlify.app/",
      },
      {
        name: "test1",
        description: 'gftf fgftf fhfh fhff ffff fff fff',
        picture: "",
        github: "https://github.com/Khalid-Graine/fibre-landing-page",
        demo: "https://fibre-landing-page.netlify.app/",
      },
    ],
  }),
  getters: {
    TaksCount() {
      return this.tasks.length;
    },
  },
  actions: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
