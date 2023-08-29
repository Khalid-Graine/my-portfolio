<template>
    <div>
        <div class="mb-1 text-secondary">
        Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies. 
       </div >
       
     <p class="text-primary font-semibold my-1">front end:</p>
       <tags :tags="['html', 'css','javascript','vue js','pinia js', 'tailwind css','bootstrap', ]" />

       <p class="text-primary font-semibold my-1">back end:</p>
       <tags :tags="['php', 'laravel','inertia js','mysql', 'api']" />

       <p class="text-primary font-semibold my-1">tools:</p>
       <tags :tags="['vs code', 'git','github','post man', 'npm']" />
       


    </div>
</template>
<script setup>
import Tags from '../Tags.vue';

</script>
