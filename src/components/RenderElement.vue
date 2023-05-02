<template>

        <code v-if="props.type === 'code'" style=" white-space: pre-line;">{{ props.value }}</code>
    
  
        
   
   
        <p v-if="props.type === 'text'" class="text-justify">{{ props.value }}</p>


        <img v-if="props.type === 'image'" :src="'@/assets/' + props.value + '.png'" />


        <h2 v-if="props.type === 'heading'" class="text-2xl font-bold"> {{ props.value }}</h2>


        <ul v-if="props.type === 'list'" class="list-disc list-inside">
            <li v-for="item in props.value">{{ item }}</li>
        </ul>
        <br>

</template>

<script setup>
const props = defineProps(["type", "value"]);


</script>