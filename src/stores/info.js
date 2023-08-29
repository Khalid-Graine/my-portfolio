import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    fullName: "Khalid Graine",
    position: 'full-stack web developer',
    description: 'I enjoy the process of turning concepts into code, starting from scratch and taking them all the way through deployment until they exist in the real world.',
    githubUrl: 'https://github.com/Khalid-Graine',
    linkedinUrl: 'https://linkedin.com/in/khalid-graine',
    linkMail: 'khalidgraine1@gmail.com',
    skills: ['php', 'laravel', 'mysql', 'vue js', 'html', 'css', 'tailwind css', 'inertia js'],
    aboutMe: "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation My main focus these days is building products and leading projects for our clients at Upstatement. In my free time Ive also released an online video course that covers everything you need to know to build a web app with the Spotify API. When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds",
    projects: [
      {
        name: "Student Managment app",
        description: 'des',
        picture: "https://i.pinimg.com/originals/f0/ad/c0/f0adc01007b0cf9e25f503562e43de33.png",
        github: "https://github.com/Khalid-Graine/laravel-student-management",
        tech: ["Php", "Laravel", 'mysql',"Tailwindcss"]
      },
      {
        name: "dynamic portfolio",
        description: 'des',
        picture: "https://i.pinimg.com/originals/c3/f4/c7/c3f4c7062b48a56e6a7063e2d443f3ac.png",
        github: "https://github.com/Khalid-Graine/laravel-portfolio",
        tech: ["Php", "Laravel", 'mysql',"admin dashboard","Tailwindcss"]
      },
      {
        name: "social media platform",
        description: 'des',
        picture: "https://i.pinimg.com/originals/e0/1d/78/e01d78da08b14ad56ad834dad1c22a22.png",
        github: "https://github.com/Khalid-Graine/laravel-social-media-platform/tree/main",
        tech: ["Php", "Laravel", 'mysql',"Tailwindcss"]
      },
      {
        name: "test1",
        description: 'gftf fgftf fhfh fhff ffff fff fff',
        picture: "https://i.pinimg.com/originals/fd/51/02/fd51021ff6a51eade86e9692a02c248b.png",
        github: "https://github.com/Khalid-Graine/fibre-landing-page",
        demo: "https://fibre-landing-page.netlify.app/",
        tech: ['HTML', 'CSS', 'js', 'CSS', 'js']
      },
      {
        name: "whatssap clone",
        description: 'gftf fgftf fhfh fhff ffff fff fff',
        picture: "https://i.pinimg.com/originals/af/13/96/af13962383242e44ab780930a39feeda.png",
        github: "https://github.com/Khalid-Graine/whatsapp-clone",
        demo: "https://whatssap-clone.netlify.app/",
        tech: ['Vue js', 'Pinia', 'Tailwind css']
      },
      {
        name: "web developer portfolio",
        description: 'This is Web-Developer-Portfolio project made with Vue js, Tailwind css',
        picture: "https://i.pinimg.com/originals/86/01/ae/8601ae3e8f28977e7e7adc80bc9c05ea.png",
        github: "https://github.com/Khalid-Graine/web-developer-portfolio",
        demo: "https://main--developer-portfolio-257.netlify.app/",
        tech: ["Vue js", "Tailwind css"]
      },
      {
        name: "disrourd clone",
        description: 'descccccccccc',
        picture: "https://i.pinimg.com/originals/d8/7e/07/d87e07c216c843ad30dc5568f5b00774.png",
        github: "https://github.com/Khalid-Graine/discourd-clone",
        demo: "https://fluffy-malabi-cd4084.netlify.app",
        tech: ["Html", "Css"]
      },
      {
        name: "kesper",
        description: 'descccccccccc',
        picture: "https://i.pinimg.com/originals/45/60/44/456044b27bbb3bea5fa5b30701169024.png",
        github: "https://github.com/Khalid-Graine/kesper-responsive",
        demo: "https://keen-griffin-08d6cf.netlify.app/",
        tech: ["Html", "Css", "responsive design"]
      },
      {
        name: "leon",
        description: 'descccccccccc',
        picture: "https://i.pinimg.com/originals/cd/8f/c0/cd8fc0a84c6752d91a9823812ddcb2e6.png",
        github: "https://github.com/Khalid-Graine/leon",
        demo: "https://khalid-graine.github.io/leon/",
        tech: ["Html", "Css", "responsive design"]
      },

    ],
    experiences: [
      {
        date: "May 2023 -  Sep 2023 (5 Months)",
        title: 'backend deveoper  (Self-taught) ',
        mytasks: [
          'Developed and maintained Laravel backend',
          'Designed RESTful APIs, ensuring seamless frontend-backend integration',
          'Collaborated on frontend data flow and API consumption',
          'Implemented user authentication and role-based access control',
          'Optimized database queries and performance for efficient data retrieval',
          'Implemented data validation and sanitization to enhance security',
          'Resolved backend bugs promptly, ensuring application stability'
        ],
        tech: ['PHP', 'LARAVEL', 'INERTIA JS', 'MYSQL']
      },
      {
        date: " Apr 2022 -  Apr 2023 (1 Year)",
        title: 'front end developer  (Self-taught)',
        mytasks: [
          'Developed responsive user interfaces with Vue.js',
          'Integrated backend APIs for data exchange using Axios or Fetch API',
          'Managed application state with pinia  for data consistency and modularity',
          'Implemented routing and navigation using Vue Router',
          'Styled UI components using Tailwind CSS for consistent and visually appealing designs',
          'Collaborated with backend developers to define API requirements',
          'Optimized frontend performance for faster loading and rendering',
          'Implemented form validation and user input handling for data integrity',
          'Integrated third-party libraries and plugins to enhance functionality',
          'Collaborated with UI/UX designers to seamlessly integrate designs'

        ],
        tech: ['HTML', 'CSS', 'JS', 'VUE JS', 'PINIA', 'TAILWIND CSS']
      }
    ],

  }
  ),
  actions: {
    getFirstProjects() {
      return this.projects.slice(0, 3);
    }
  }
});

