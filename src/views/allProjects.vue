<template>
  <!-- for md and bigegr screens -->
    <div class="hidden md:block bg-main font-Poppins">
        <div class="md:w-8/12  mx-auto p-2 py-6 md:py-20 text-primary">
        
        <router-link to="/" class="mb-4 ml-2 md:ml-2">
            <i class="fa-solid fa-arrow-left"></i>
            <span class="mx-2">home</span>
        </router-link>



        <div>
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-bold dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-4 py-4">#</th>
              <th scope="col" class="px-4 py-4">Project</th>
              
                <th scope="col" class="px-4 py-4 ">Build with</th>
              <th scope="col" class="px-4 py-4">links</th>
           
            </tr>
          </thead>
          <tbody>  
            <tr v-for="project in InfoStore.projects" :key="project"
              class="border-b transition duration-300 ease-in-out ">
              <td class="whitespace-nowrap px-6 py-2">
                
                   
                    <div class="w-[90px] md:w-[150px] overflow-hidden bg-red-400">
                         <img :src="project.picture" alt="">
                    </div>
                 
              </td>
              <td class="whitespace-nowrap px-6 py-2">
                 {{ project.name }}
              </td>
              <td class="whitespace-nowrap px-6 py-2">
                <Tags :tags="project.tech" />
              </td>
              <td class="whitespace-nowrap  px-6 py-2 ">
                 
                  
           <div class="flex justify-center items-center h-full   gap-2">
            <a v-if="project.demo" :href="project.demo" target="_blank">
              <i class="fa-regular fa-eye icon"></i>
            </a>
            <a v-if="project.github" :href="project.github" target="_blank"
              ><i class="fa-brands fa-github icon"></i
            ></a>
           </div>
      
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    </div>

    <!-- for small screens -->
    <div class="md:hidden bg-main font-Poppins">
        <div class="md:w-8/12  mx-auto p-2 py-6 md:py-20 text-primary">
        
        <router-link to="/" class="mb-4 ml-2 md:ml-2">
            <i class="fa-solid fa-arrow-left"></i>
            <span class="mx-2">home</span>
        </router-link>



        <div>
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-bold dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-4 py-4">#</th>
              <th scope="col" class="px-4 py-4">Project</th>
            </tr>
          </thead>
          <tbody>  
            <tr v-for="project in InfoStore.projects" :key="project"
              class="border-b transition duration-300 ease-in-out ">
              <td class="whitespace-nowrap px-6 py-2">
                
                   
                    <div class="w-[90px] md:w-[150px] overflow-hidden bg-red-400">
                         <img :src="project.picture" alt="">
                    </div>
                 
              </td>
              <td class="whitespace-nowrap px-6 py-2 ">
                
                 <a :href="project.demo" target="_blank" class="flex items-center gap-2 hover:text-secondary">
                  <p>{{ project.name }}</p>
                  <i v-if="project.demo" class="fa-solid fa-up-right-from-square"></i>
                </a>
                 
                 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    </div>
</template>

<script setup>
import Tags from "../components/Tags.vue";
import { useInfoStore } from "../stores/informations";
const InfoStore = useInfoStore();



</script>