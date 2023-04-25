<script setup>
import ScrollPanel from 'primevue/scrollpanel';
import SelectButton from 'primevue/selectbutton';
import { onMounted } from 'vue';

const options = ["Console", "Hilfe"]
const selected = ref("Console")

onMounted(() => {
    selected = props.selected
})


const props = defineProps({
    content: {
        type: Object,
        required: true
    },
    selected: {
        type: String,
        required: true
    }
})

</script>


<template>
    <SelectButton v-model="selected" :options="options" />

    <ScrollPanel>
        <p>{{ content[selected] }}</p>
    </ScrollPanel>

</template>