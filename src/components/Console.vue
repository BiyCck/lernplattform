<template>
    <div class="h-full">
        <button class="bg-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow mr-5">Output</button>
        <button class="bg-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow">Help</button>
        <ScrollPanel class="h-full">
            <section>
                <p style="background-color: #282c34; white-space: pre-line;">{{ current == "consolelog" ? consolelog : help}}</p>
            </section>
            
        </ScrollPanel>
    </div>
</template>

<script setup>
import {  ref } from "vue";
import ScrollPanel from 'primevue/scrollpanel'


const props = defineProps(['consolelog', 'help', 'current']);

const emits = ['update'];

function toggleHelp() {
    emits['update'] = "help"
}
function toggleConsole() {
    emits['update'] = "consolelog"
}


</script>