<template>
  <NavigationBar/>
  <RouterView/>
</template>

<script setup>
  import NavigationBar from '@/components/NavigationBar.vue';
  import { RouterView } from 'vue-router';
</script>

