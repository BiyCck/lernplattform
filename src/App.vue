<template>
  <NavigationBar/>
  <body class="mt-40">
    <RouterView/>
  </body>
</template>

<script setup>
  import NavigationBar from '@/components/NavigationBar.vue';
  import { RouterView } from 'vue-router';
</script>

