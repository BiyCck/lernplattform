<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ width: '90%', margin: '0 auto', height: '100%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
  />
</template>

<script setup>
  import { defineComponent, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { python } from '@codemirror/lang-python'
  import { oneDark } from '@codemirror/theme-one-dark'

 

const code = ref(`print('Hello World')`)
const extensions = [python(), oneDark]

const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

</script>