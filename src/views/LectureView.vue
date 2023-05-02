<template>
    <main class="bg-gray-800 text-white pt-40 h-screen">
        <Lecture :id="props.id" :lesson="lesson" :task="task" :defaultCode="defaultCode" :userCode="userCode"/>
    </main>

</template>
<script setup>
import Lecture from '@/components/Lecture.vue';
import { useLectureStore } from '@/store/LectureStore';
import {defineProps, onBeforeUpdate, watch} from 'vue';

const props = defineProps(['id']);
const lectureStore = useLectureStore()

let lecture = lectureStore.getLecture.find((element) => element.id == props.id);
let task = lecture['task'];
let lesson = lecture['content'];
let defaultCode = lecture['defaultCode'];
let userCode = ""

onBeforeUpdate(() => {
    console.log("updated")
    lecture = lectureStore.getLecture.find((element) => element.id == props.id)
    task = lecture['task'];
    lesson = lecture['content'];
    defaultCode = lecture['defaultCode'];
    userCode = ""
})

</script>