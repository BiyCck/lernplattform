<template>
    <section>
        <div class="mx-10 px-4 py-4 mt-4" style="background-color: #282c34">
          <RenderElement v-for="l in props.task" :type="l.type" :value="l.value"></RenderElement>
        </div>
    </section>
</template>

<script setup>
import RenderElement from '@/components/RenderElement.vue';


const props = defineProps({
  task: {
    type: Array,
    required: true,
  },
});


</script>
