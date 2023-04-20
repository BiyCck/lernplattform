<template>
    <button @click="getHelp">Hilfe</button>
    <div v-for="response in responses" :key="response"><p>{{ response }}</p></div>
</template>

<script>
//import fetchEventSource from '@microsoft/fetch-event-source'

export default {
    name: "ChatGPT",
    data() {
        return {
            responses : [],
            buttonVisible : true,
        }
    },

    methods: {
        getHelp() {
            this.emitter.emit("get-help")
            this.buttonVisible = false
        }
    },
    mounted() {
        this.emitter.on("code", async (code) => {
            this.responses.push(code)
            /*await fetchEventSource("http://localhost:5000/{user}", {
                method: "POST",
                body: JSON.stringify({
                    "user_id": user_id,
                    "code": code
                })
            })*/

        })
    }

}



</script>