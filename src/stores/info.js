import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    fullName: "Khalid Graine",
    position: 'full-stack web developer',
    description: 'I like to craft solid and scalable full stack products with great user experiences.',
    githubUrl: 'https://github.com/Khalid-Graine',
    linkedinUrl: 'https://linkedin.com/in/khalid-graine',
    skills: ['php', 'laravel', 'mysql', 'vue js', 'html', 'css', 'tailwind css', 'inertia js'],
    aboutMe: "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation My main focus these days is building products and leading projects for our clients at Upstatement. In my free time Ive also released an online video course that covers everything you need to know to build a web app with the Spotify API. When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds",
    projects: [
      {
        name: "test1",
        description: 'gftf fgftf fhfh fhff ffff fff fff',
        picture: "https://i.pinimg.com/originals/fd/51/02/fd51021ff6a51eade86e9692a02c248b.png",
        github: "https://github.com/Khalid-Graine/fibre-landing-page",
        demo: "https://fibre-landing-page.netlify.app/",
        tech: [ 'HTML', 'CSS', 'js', 'CSS', 'js' ]
      },
      {
        name: "web developer portfolio",
        description: 'This is Web-Developer-Portfolio project made with Vue js, Tailwind css',
        picture: "https://i.pinimg.com/originals/86/01/ae/8601ae3e8f28977e7e7adc80bc9c05ea.png",
        github: "https://github.com/Khalid-Graine/web-developer-portfolio",
        demo: "https://main--developer-portfolio-257.netlify.app/",
        tech: ["Vue js", "Tailwind css"]
      },
    ],
    experiences: [
      {
        date: "May - Aug",
        title: 'backend deveoper  (Self-taught)',
        description: "As part of Northeastern's entrepreneurial ecosystem, our aim is to be the best place on campus for students to learn about design. We are a community of more than fifty students who work together to kick butt on a variety of teams",
        tech: ['PHP', 'LARAVEL', 'INERTIA JS','MYSQL' ]
      },
      {
        date: "2022 - 2023",
        title: 'front end developer  (Self-taught)',
        description: "As part of Northeastern's entrepreneurial ecosystem, our aim is to be the best place on campus for students to learn about design. We are a community of more than fifty students who work together to kick butt on a variety of teams",
        tech: ['HTML', 'CSS', 'JS', 'VUE JS','PINIA', 'TAILWIND CSS']
      }
    ],
    
  }),
});

