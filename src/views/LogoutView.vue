<script setup>
import { useUserStore } from '@/store/UserStore';

const userStore = useUserStore();


userStore.logout();

</script>

<template>
    <section class="mx-20">
        <div>You have been logged out.</div>
    </section>
</template>