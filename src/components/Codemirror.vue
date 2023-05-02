<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ width: '100%', margin: '0 auto', height: '100%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @update="updateCode"
  />
</template>

<script setup>
  import { onMounted, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { python } from '@codemirror/lang-python'
  import { oneDark } from '@codemirror/theme-one-dark'

 

const code = ref()
const extensions = [python(), oneDark]

const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

const props = defineProps(['defaultCode', 'userCode'])

const emit = defineEmits(['updateCode'])

onMounted(() => {
  if (props.userCode) code.value = props.userCode
  else code.value = props.defaultCode
})

function updateCode() {
  emit('updateCode', code.value)
}

</script>