<template>
  <div class="bg-gray-800 h-screen flex flex-col justify-center items-center">
    <!-- Header -->
    <div class="w-full h-4/6 relative">
      <div class="absolute inset-0 bg-no-repeat bg-center bg-cover" style="background-image: url('/header.svg')"></div>
      <div class="absolute top-1/4 left-10">
        <h1 class="text-5xl font-bold mb-6 text-blue-900">
          Willkommen auf<br />
          unserer Plattform <br />
          CodeCoach
        </h1>
        <a href="#" class="inline-block text-lg font-bold text-white py-2 px-6 bg-blue-900 hover:bg-blue-800 rounded-full">
          KLICKEN
        </a>
      </div>
    </div>
    <!-- Categories -->
    <div class="w-full h-2/6 relative">
      <div class="absolute inset-0 bg-no-repeat bg-center bg-cover" style="background-image: url('/categories.svg')"></div>
      <div class="absolute top-1/2 left-10 right-10">
        <p class="text-3xl font-bold mb-6 text-blue-900">Was möchtest du lernen?</p>
        <div class="grid grid-cols-2 gap-6">
          <a href="#" class="block text-xl font-bold py-4 px-6 bg-white hover:bg-blue-900 hover:text-white rounded-full">
            Python
          </a>
          <a href="#" class="block text-xl font-bold py-4 px-6 bg-white hover:bg-blue-900 hover:text-white rounded-full">
            Java
          </a>
          <a href="#" class="block text-xl font-bold py-4 px-6 bg-white hover:bg-blue-900 hover:text-white rounded-full">
            Rust
          </a>
          <a href="#" class="block text-xl font-bold py-4 px-6 bg-white hover:bg-blue-900 hover:text-white rounded-full">
            JavaScript
          </a>
        </div>
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