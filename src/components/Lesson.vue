<template>
  <section>
    <div class="mx-10 px-6 py-4" style="background-color: #282c34">
      <RenderElement v-for="l in props.lesson" :type="l.type" :value="l.value"></RenderElement>
    </div>
  </section>
    
</template>

<script setup>
import RenderElement from '@/components/RenderElement.vue';


const props = defineProps({
  lesson: {
    type: Array,
    required: true,
  },
});


</script>