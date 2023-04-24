<template>
    <div v-for="response in responses" :key="response"><p>{{ response }}</p></div>
    <div><p>{{ code }}</p></div>
    <button v-if="helpButtonActive" @click="getHelp">Hilfe</button>
</template>

<script setup>
import { fetchEventSource } from '@microsoft/fetch-event-source'
import { ref } from 'vue'
import  Codemirror  from '@/components/Codemirror.vue'

const chatGPTAPI = "https://lernplattform-backend-2ch7vzacyq-ey.a.run.app/chatgpt"

const chatGptResponses = ref([])
const currentChatGptResponse = ref("")
const consoleContent = ref("")
const consoleVisible = ref(false)
const helpButtonActive = ref(true)
const code = ref("print('Hello World')")
const defaultCode = ref("print('Hello World')")
const task = ref("Schreibe ein Programm mit Python, welches den Text 'Hello World' ausgibt")

async function getHelp() {
    helpButtonActive.value = false
    const eventSource = fetchEventSource(`${chatGPTAPI}`, {
        method: 'POST',
        body: JSON.stringify({
            code: code.value,
            task: task.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    eventSource.addEventListener('message', (event) => {
        const data = JSON.parse(event.choices[0].delta)
        console.log(data)
        currentChatGptResponse.value += data
    })

    eventSource.addEventListener('open', (event) => {
        console.log(event)
    })

    eventSource.addEventListener('close', (event) => {
        console.log(event)
        chatGptResponses.value.push(currentChatGptResponse.value)
    })

    eventSource.addEventListener('error', (event) => {
        console.log(event)
    })

}

</script>