<template>
  <NavigationBar />
  <RouterView />
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useUserStore } from '@/store/UserStore';
import { useLectureStore } from '@/store/LectureStore';


onMounted(() => {
  const LectureStore = useLectureStore();
    const UserStore = useUserStore();
    LectureStore.loadLectures();
    if (UserStore.isLoggedIn) {
      LectureStore.loadProgress();
      LectureStore.loadUserCode();
    };
});

</script>

