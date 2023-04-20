<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px', width: '40%', margin: '0 auto' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script>
  import { defineComponent, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { python } from '@codemirror/lang-python'
  import { oneDark } from '@codemirror/theme-one-dark'

  export default defineComponent({
    components: {
      Codemirror
    },
    setup() {
      const code = ref(`print('Hello World')`)
      const extensions = [python(), oneDark]

      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      return {
        code,
        extensions,
        handleReady,
        log: console.log
      }
    },

    mounted(){
      this.emitter.on("get-help", () => {
        this.emitter.emit("code", this.code)
      })
    },
  })
</script>