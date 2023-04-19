<template>
  <navigation-bar/>
  <router-view/>
</template>

<script>
  import { onBeforeMount } from "vue";
  import { useStore } from "vuex";
  import NavigationBar from './components/NavigationBar.vue';

  export default {
  components: { 'navigation-bar': NavigationBar },

    setup() {
      const store = useStore()

      onBeforeMount(() => {
        store.dispatch('fetchUser')
      })
    }
  }

</script>

