<template>
    <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src="@/assets/HSBA_4c_Claim_rechts_Logo.svg" class="w-1/5">


            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-32 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <RouterLink to="/">
                            <div class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page">Home</div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/lecture">
                            <div
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">
                                Lectures</div>
                        </RouterLink>
                    </li>

                    <li v-if="!userStore.isLoggedIn">
                        <RouterLink to="/login">
                            <div
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">
                                Login</div>

                        </RouterLink>
                    </li>
                    <li v-if="!userStore.isLoggedIn">
                        <RouterLink to="/register">
                            <div
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">
                                Register</div>
                        </RouterLink>

                    </li>
                    <li v-if="userStore.isLoggedIn">
                        <RouterLink to="/logout">
                            <div
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">
                                Logout</div>
                        </RouterLink>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>

import { useUserStore } from '@/store/UserStore';
import Dropdown from 'primevue/dropdown';

const userStore = useUserStore()



</script>
<style></style>