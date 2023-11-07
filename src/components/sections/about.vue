<template>
    <div class="text-secondary flex flex-col gap-4">
        <p>In April 2022, I started learning programming on my own. I began with HTML, CSS, and JavaScript, and then I moved on to Vue.js. I really enjoy solving problems, so I built various projects to practice.</p>

<p>After that, I got curious about the technical side of things, so I learned PHP, Laravel, and MySQL. This helped me create more complex projects like 
    <a href="https://github.com/Khalid-Graine/laravel-social-media-platform" class=" text-blue-400">an
        app similar to Instagram</a>
    and 
    <a href="https://github.com/Khalid-Graine/laravel-student-management" class="text-blue-400">a system for managing students</a>.
 </p>

<p>I believe coding is like art, blending logic and creativity to make digital things. I like making programs that work well and feel smooth to use.</p>


<p>My journey shows that learning by yourself is possible and exciting. From starting with basic code to making more complicated apps, I've learned a lot and I'm eager to keep improving.</p>

    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String
    }
})
</script>