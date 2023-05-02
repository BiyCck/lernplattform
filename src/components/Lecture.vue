<template>
    <LectureNavigation :lessonId="props.id" />
    <div class="pt-8 h-full">

        <div v-if="!props.task" class="w-2/5 m-auto">
            <ScrollPanel style="height: 100%">
                <Lesson :lesson="props.lesson" />
            </ScrollPanel>
        </div>

        <div v-else class="h-full">
            <LectureWithEditor :id="props.id" :lesson="props.lesson" :task="props.task" :defaultCode="props.defaultCode" />
        </div>
    </div>
</template>


<script setup>
import { defineProps } from "vue";
import Lesson from "@/components/Lesson.vue";
import LectureWithEditor from "@/components/LectureWithEditor.vue";
import LectureNavigation from "@/components/LectureNavigation.vue";
import ScrollPanel from "primevue/scrollpanel";

const props = defineProps(["id", "lesson", "task", "defaultCode"]);


</script>