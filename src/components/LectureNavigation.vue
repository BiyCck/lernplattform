<script setup>
import { computed } from 'vue';
import { useLectureStore } from '@/store/LectureStore';

const LectureStore = useLectureStore();
const lectureCount = LectureStore.lectureCount

const props = defineProps(["lessonId"]);

const next = computed(() => {
    const nextInt = parseInt(props.lessonId) + 1;
    return "/lecture/" + nextInt;
});

const previous = computed(() => {
    const prevInt = parseInt(props.lessonId) - 1;
    return "/lecture/" + prevInt;
});



</script>

<template>
    <div class="w-full justify-center flex">
        <div class="mx-5">
            <RouterLink :to="previous" v-show="props.lessonId > 1">
                <button
                    class="bg-green-500 hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow">Previous</button>
            </RouterLink>
        </div>
        <div class="mx-5">
            <RouterLink :to="next" v-show="props.lessonId < lectureCount">
                <button
                    class="bg-green-500 hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow">Next</button>
            </RouterLink>
        </div>
        <div class="mx-5">
            <RouterLink to="/" v-show="props.lessonId == lectureCount">
                <button
                    class="bg-green-500 hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow">Finish
                    Course</button>
            </RouterLink>
        </div>
    </div>
</template>