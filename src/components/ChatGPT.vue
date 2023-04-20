<template>
    <div v-for="response in responses" :key="response"><p>{{ response }}</p></div>
    <div><p>{{ data }}</p></div>
    <button v-if="buttonVisible" @click="getHelp">Hilfe</button>
</template>

<script>
import { fetchEventSource } from '@microsoft/fetch-event-source'

const chatGPTAPI = process.env.VUE_APP_CHATGPT_API

export default {
    name: "ChatGPT",
    data() {
        return {
            responses : [],
            data : "",
            buttonVisible : true,
            code : "print('Hello World')",
            task : "Schreibe ein Programm mit Python, welches den Text 'Hello World' ausgibt"
        }
    },

    methods: {
        getHelp() {
            async () => {
                await fetchEventSource(chatGPTAPI, {
                    method: 'POST',
                    headers: {
                                'Content-Type': 'application/json',
                            },
                    body: JSON.stringify({
                        "task": this.task,
                        "code": this.code})
                    },
                    {
                        onmessage: (event) => {
                            this.buttonVisible = false
                            this.data += event.data.choices[0].delta.content
                        }
                    }, 
                    {
                        onclose: () => {
                            this.responses.push(this.data)
                            this.data = ""
                            this.buttonVisible = true
                        }
                    }
                )
            }
            this.buttonVisible = false
        }
    },
    mounted() {
        this.emitter.on("code-update" , (code) => {
            console.log(code)
            this.code = code
        })
        this.emitter.on("task-update" , (task) => {
            this.task = task
        })
    }

}
</script>