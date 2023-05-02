<template>
    <div class="h-full mt-8">
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