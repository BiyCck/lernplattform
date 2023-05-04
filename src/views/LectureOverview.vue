<script setup>
import { useLectureStore } from '@/store/LectureStore';

const lectureStore = useLectureStore();
const lectures = lectureStore.getLecture.sort((a, b) => a.id - b.id);

</script>

<template>
    <main class="bg-gray-800 text-white pt-40 h-screen flex justify-center space-x-10">
        <ul class="w-1/3">
            <li v-for="lecture in lectures" :key="lecture.id" class="w-full my-2">
                <router-link :to="{ name: 'Lecture', params: { id: lecture.id } }">
                    <div class="bg-green-500 rounded-lg text-black p-2">{{ lecture.title }}</div>
                </router-link>
            </li>
        </ul>
        <div class="w-1/3 my-2 text-lg">
            Danke, dass du dich für unseren Python Kurs entschieden hast. Wir hoffen, dass du viel Spaß hast und viel lernst.
            Die folgenden Lektionen werden dir helfen, die Grundlagen von Python zu verstehen und zu lernen, wie du Python-Code schreibst.
            Um deinen Fortschritt zu verfolgen, kannst du die Lektionen in der linken Spalte auswählen.
        </div>
        
    </main>

</template>