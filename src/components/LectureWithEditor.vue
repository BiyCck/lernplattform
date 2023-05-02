<template>
    <Splitter layout="horizontal" style="height: 70vh;">
        <SplitterPanel :size="40">
            <ScrollPanel class="h-full">
                <Lesson :lesson="props.lesson"/>
                <Task :task="props.task"/>
            </ScrollPanel>
        </SplitterPanel>
        <SplitterPanel>
            <Splitter layout="vertical" class="h-full">
                <SplitterPanel :size="50" :min-size="20">
                    <div class="h-full">
                        <Codemirror :defaultCode="props.defaultCode" @update-code="updateCode"/>
                    </div>
                </SplitterPanel>
                <SplitterPanel class="h-full overflow-hidden mx-4 mb-10" :size="50" :min-size="10" v-if="consoleVisible" @update="">
                    <Console :consolelog="consoleLog" :help="currentChatGptResponse" :current="consoleContent"/>
                </SplitterPanel>
            </Splitter>
        </SplitterPanel>

    </Splitter>
        <div class="flex justify-end space-x-16 mr-10">
                        <button class="bg-gray-400 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow" @click="toggleConsole">Console</button>
                        <button
                            class="bg-yellow-400 hover:bg-yellow-200 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow"
                            :class="{ 'cursor-not-allowed': ! helpButtonActive }" @click="getHelp">Help</button>
                        <button
                            class="bg-green-500 hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow"
                            @click="runCode">
                            Run
                        </button>
                    </div>
</template>

<script setup>
import { fetchEventSource } from '@microsoft/fetch-event-source'
import { computed, ref } from 'vue'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Codemirror from '@/components/Codemirror.vue'
import ScrollPanel from 'primevue/scrollpanel'
import Console from '@/components/Console.vue'
import { useLectureStore } from '@/store/LectureStore'
import Task from './Task.vue'
import Lesson from './Lesson.vue'
import Lecture from './Lecture.vue'

const backendURI = "https://lernplattform-backend-2ch7vzacyq-ey.a.run.app"

const currentChatGptResponse = ref("")
const consoleContent = ref("consolelog")
const consoleLog = ref("")
const consoleVisible = ref(false)
const helpButtonActive = ref(true)
const lectureStore = useLectureStore()

const props = defineProps(['lectureId', 'defaultCode', 'task', 'lesson'])
const code = ref(props.defaultCode)

function updateCode(newCode) {
    code.value = newCode
}

function toggleConsole() {
    consoleVisible.value = !consoleVisible.value
}


async function getHelp() {
    helpButtonActive.value = false
    consoleVisible.value = true
    consoleContent.value = "help"
    const controller = new AbortController()
    const conn = await fetchEventSource(`${backendURI}/chatgpt`, {
        method: 'POST',
        body: JSON.stringify({
            code: code.value,
            task: props.task.filter( t => t.type === "text").map( t => t.value).join(" ")
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        signal: controller.signal,
        keepalive: true,
        onmessage(mess) {
            let data = JSON.parse(mess.data)
            if(typeof data.choices[0].delta.content !== "undefined") {
                currentChatGptResponse.value += data.choices[0].delta.content
            }
            if (Object.keys(data.choices[0].delta).length === 0){
                helpButtonActive.value = true
                controller.abort()
            }
            
        },
    })
}

function reset() {
    code.value = defaultCode.value
    chatGptResponses.value = []
    currentChatGptResponse.value = ""
    helpButtonActive.value = true
}

async function runCode() {
    const response = await fetch(`${backendURI}/runcode`, {
        method: 'POST',
        body: JSON.stringify({
            code: code.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let enc = new TextDecoder("utf-8")
    consoleVisible.value = true
    consoleContent.value = "consolelog"
    consoleLog.value = enc.decode((await response.body.getReader().read()).value)
    console.log(consoleLog.value)
    lectureStore.updateUserCode(props.lectureId, code.value)
}

</script>