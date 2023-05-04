<template>
  <div class="bg-gray-800 h-screen flex flex-col justify-center items-center">
    <!-- Header -->
    <div class="w-full h-full relative">
      <div class="absolute inset-0 bg-no-repeat bg-center bg-cover" style="background-image: url('/header.svg')"></div>
      <div class="absolute top-1/4 left-10">
        <h1 class="text-5xl font-bold mb-6 text-blue-900">
          Willkommen auf<br />
          unserer Plattform <br />
          CodeCoach
        </h1>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
</style>



<script setup>
import { onBeforeMount } from "vue";
</script>